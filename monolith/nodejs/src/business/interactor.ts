import { Context } from '../ports/context'

import { requestSlip } from '../ui/ports/input'
import { SlipRequest, SlipResponse } from '../ui/models'

import { DepositSlip, SlipGenerator } from './core/types'
import { buildSlipGenerator } from './generate-slip'
import moment from 'moment'


export function buildCreateNewSlip(context: Context): Promise<requestSlip> {
    return Promise.resolve(async (req: SlipRequest): Promise<SlipResponse> => {
        const generator: SlipGenerator = buildSlipGenerator(context.slipGeneratorProvider)
        const slip: DepositSlip = await generator(Number.parseFloat(req.amount))

        return {
            amount: slip.amount.toFixed(2),
            dueDate: moment(slip.dueDate).format(''),
            barCode: slip.barCode,
        }
    })
}