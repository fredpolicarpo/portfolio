/* tslint:disable no-unused-expression */

import { expect } from 'chai'
import moment from 'moment'
import { buildCreateNewSlip } from './interactor'
import { requestSlip } from '../ui/ports/input'
import { Context } from '../ports/context'
import { SlipResponse } from '../ui/models'


describe('Interactor', async () => {
    let requestSlipFunc: requestSlip

    it('should build a deposit slip provider based on the context', async () => {
        const expectedSlip = {
            amount: 20,
            dueDate: moment().add(3, 'days').toDate(),
            barCode: '23793381286004050992321000063301683940000002000'
        }

        const stubContext: Context = {
            slipGeneratorProvider: (amount: number) => (Promise.resolve(expectedSlip))
        }

        requestSlipFunc = await buildCreateNewSlip(stubContext)

        const result: SlipResponse = await requestSlipFunc({ amount: '20' })

        expect(result.barCode).to.be.equal(expectedSlip.barCode)
        expect(result.amount).to.be.equal('20.00')
        expect(result.dueDate).to.be.equal(moment(expectedSlip.dueDate).format(''))
    })
})