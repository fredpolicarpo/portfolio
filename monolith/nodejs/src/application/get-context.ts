import { Context as ServiceContext } from '../services/context'
import defaultContext from '../third-party/default-context'

export const getServiceContext = (): ServiceContext => {
    if (process.env.CONTEXT === 'DEFAULT') {
        return defaultContext
    }

    throw new Error(`Context not supported: ${process.env.CONTEXT}`)
}
