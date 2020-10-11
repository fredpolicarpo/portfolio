import { Context } from '../services/context'
import { generateSlip } from './baas/your-gold-baas'

const context: Context = {
    slipGeneratorProvider: generateSlip

}

export default context