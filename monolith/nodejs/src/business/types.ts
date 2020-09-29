export interface DepositSlip {
    amount: number,
    dueDate: Date,
    barCode: string,
}

export type SlipGeneratorProvider = (amount: number) => Promise<any>

export type SlipGenerator = (amount: number) => Promise<DepositSlip>

export type SlipGeneratorBuilder = (provider: SlipGeneratorProvider) => SlipGenerator

export class InvalidAmountError extends Error {
    constructor(amount: number) {
        super(`The minimum amount allowed is 20, but given ${amount}`)
    }
}