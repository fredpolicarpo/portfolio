import { requestSlip } from '../ports/input'
import { SlipRequest } from '../models'

import { Context } from '../../services/context'

import { buildCreateNewSlip } from '../../business/interactor'

export function buildRequestSlip(serviceContext: Context): requestSlip {
    return async (slipReq: SlipRequest) => {
        return buildCreateNewSlip(serviceContext)
            .then(createNewSlip => createNewSlip(slipReq))
    }
}