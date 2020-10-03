import { DepositSlip, SlipGenerator, SlipGeneratorProvider, InvalidAmountError } from './types'
import canGenerateSlip from './core/can-generate-slip'

export const buildSlipGenerator = (provider: SlipGeneratorProvider): SlipGenerator => {
    return async (amount: number): Promise<DepositSlip> => {
        if (!canGenerateSlip(amount)) {
            throw new InvalidAmountError(amount)
        }

        return provider(amount)
    }
}