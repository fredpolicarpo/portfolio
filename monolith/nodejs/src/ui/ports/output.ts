import { SlipResponse } from '../models'

export type showSlip = (response: SlipResponse) => void

export type showError = (error: Error) => void