export interface SlipRequest {
    readonly amount: string
}

export interface SlipResponse {
    readonly amount: string,
    readonly dueDate: string,
    readonly barCode: string,
}
