import { DepositSlip, SlipGenerator, SlipGeneratorProvider, InvalidAmountError } from "./types"

export const buildSlipGenerator = (provider: SlipGeneratorProvider): SlipGenerator => {
    return async (amount: number): Promise<DepositSlip> => {
        if (amount < 20) {
            throw new InvalidAmountError(amount)
        }

        return provider(amount)
    }
}