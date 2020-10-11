import { DepositSlip, InvalidAmountError, SlipGenerator } from './core/types'
import canGenerateSlip from './core/can-generate-slip'
import { SlipGeneratorProvider } from '../ports/baas'

export const buildSlipGenerator = (provider: SlipGeneratorProvider): SlipGenerator => {
    return async (amount: number): Promise<DepositSlip> => {
        if (!canGenerateSlip(amount)) {
            throw new InvalidAmountError(amount)
        }

        return provider(amount)
    }
}