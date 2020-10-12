/* tslint:disable no-unused-expression */

import { expect } from 'chai'
import { InvalidAmountError } from '../../business/core/types'
import { buildShowError, buildShowSlip } from './presenter'
import { showError, showSlip } from '../ports/output'
import sinon, { stubInterface } from 'ts-sinon'
import { Response } from 'express'
import { SlipResponse } from '../models'
import moment from 'moment'

describe('Presenter', async () => {
    it('should return internal error code for unknown error', async () => {
        const response: sinon.SinonStubbedInstance<Response> & Response = stubInterface<Response>()

        response.status.withArgs(500).returns(response)

        const show: showError = buildShowError(response)

        const genericError: Error = new Error('Some Generic Error')

        show(genericError)

        expect(response.status.calledWith(500)).to.be.true
        expect(response.send.calledWith({ message: 'Some Generic Error' })).to.be.true
    })

    it('should return invalid request for InvalidAmountError', async () => {
        const response: sinon.SinonStubbedInstance<Response> & Response = stubInterface<Response>()

        response.status.withArgs(400).returns(response)

        const show: showError = buildShowError(response)

        const invalidAmountError: InvalidAmountError = new InvalidAmountError(10)

        show(invalidAmountError)

        expect(response.status.calledWith(400)).to.be.true
        expect(response.send.calledWith({ message: 'Cannot create slip for R$ 10,00, it should be at least R$ 20,00' })).to.be.true
    })

    it('should return created for valid slip amount', async () => {
        const response: sinon.SinonStubbedInstance<Response> & Response = stubInterface<Response>()

        response.status.withArgs(201).returns(response)

        const show: showSlip = buildShowSlip(response)

        const slip: SlipResponse = {
            barCode: 'some bar code',
            amount: '20.00',
            dueDate: moment().format('')
        }

        const formattedSlip: SlipResponse = {
            ...slip,
            amount: 'R$ 20,00',
            dueDate: moment().format('DD/MM/yyyy')
        }

        show(slip)

        expect(response.status.calledWith(201)).to.be.true
        expect(response.send.calledWith(formattedSlip)).to.be.true
    })
})