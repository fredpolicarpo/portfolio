import axios from 'axios'
import { DepositSlip } from '../../business/core/types'
import { SlipGeneratorProvider } from '../../ports/baas'
import config from '../../application/config'

const baseUrl = config.getYourGoldBaaSUrl()

export const generateSlip: SlipGeneratorProvider = async (amount: number): Promise<DepositSlip> => {
    return axios.post(baseUrl + '/slip', { value: amount }).then(resp => {
        return {
            barCode: resp.data.YourBarCode,
            amount: resp.data.YourValue,
            dueDate: resp.data.YourDueDate
        }
    })
}