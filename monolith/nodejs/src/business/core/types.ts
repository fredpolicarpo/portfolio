export interface DepositSlip {
    readonly amount: number,
    readonly dueDate: Date,
    readonly barCode: string,
}

export type SlipGenerator = (amount: number) => Promise<DepositSlip>

export class InvalidAmountError extends Error {
    constructor(amount: number) {
        super(`The minimum amount allowed is 20, but given ${amount}`)
    }
}