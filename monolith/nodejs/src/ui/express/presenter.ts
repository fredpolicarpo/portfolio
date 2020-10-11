import { showSlip, showError } from '../ports/output'
import { SlipResponse } from '../models'

import moment from 'moment'
import { Response } from 'express'

export function buildShowSlip(resp: Response): showSlip {
    return (slip: SlipResponse): void => {
        const formattedSlip: SlipResponse = {
            ...slip,
            amount: `R$ ${slip.amount.replace('.', ',')}`,
            dueDate: moment(slip.dueDate).format('DD/MM/YYYY')
        }

        resp.status(201).send(formattedSlip)
    }
}

export function buildShowError(resp: Response): showError {
    return (error: Error): void => {
        console.log('Internal server error', error)
        resp.status(500).send({message: error.message})
    }
}