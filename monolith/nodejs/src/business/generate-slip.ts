import { DepositSlip } from "./types"
import moment from 'moment'

export async function generateSlip(amount: number): Promise<DepositSlip> {
    return  {
        amount: 20,
        dueDate: moment(new Date()).add(3, 'days').toDate(),
        codeBar: "                                                "
    }
}