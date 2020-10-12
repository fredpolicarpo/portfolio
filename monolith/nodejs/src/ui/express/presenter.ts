import { showSlip, showError } from '../ports/output'
import { SlipResponse } from '../models'
import { InvalidAmountError } from '../../business/core/types'

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

function formatMoney(value: number): string {
    return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function buildShowError(resp: Response): showError {
    return (error: Error): void => {
        if (error instanceof InvalidAmountError) {
            console.info(error.message)

            resp
                .status(400)
                .send({ message: `Cannot create slip for ${formatMoney(error.amount)}, it should be at least ${formatMoney(20)}` })
        } else {
            console.error('Internal server error', error)
            resp.status(500).send({ message: error.message })
        }
    }
}