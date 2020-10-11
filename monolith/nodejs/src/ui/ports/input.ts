import { SlipRequest, SlipResponse } from '../models'

export type requestSlip = (request: SlipRequest) => Promise<SlipResponse>