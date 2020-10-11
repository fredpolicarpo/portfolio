import { Context } from '../ports/context'
import { generateSlip } from './baas/your-gold-baas'

const context: Context = {
    slipGeneratorProvider: generateSlip

}

export default context