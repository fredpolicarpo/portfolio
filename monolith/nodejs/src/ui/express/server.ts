import express from 'express'
import bodyParser from 'body-parser'

import { getServiceContext } from '../../application/get-context'
import { SlipRequest } from '../models'

import { showSlip, showError } from '../ports/output'
import { buildShowSlip, buildShowError } from './presenter'

import { requestSlip } from '../ports/input'
import { buildRequestSlip } from './controller'

const serviceContext = getServiceContext()

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Wellcome to the Digital Wallet'))

app.post('/slip/:amount', async (req, res) => {
    const slipReq: SlipRequest = {
        amount: req.params.amount
    }

    const request: requestSlip = buildRequestSlip(serviceContext)
    const showSlip: showSlip = buildShowSlip(res)
    const showError: showError = buildShowError(res)

    request(slipReq)
        .then(slipResp => showSlip(slipResp))
        .catch(error =>showError(error))
})

app.listen(port, () =>
    /* tslint:disable no-console */
    console.log(`Runing Digital Wallet backend at http://localhost:${port}`)
)
