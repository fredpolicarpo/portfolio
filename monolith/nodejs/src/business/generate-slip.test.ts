import { assert } from 'chai'
import moment from 'moment'
import { DepositSlip } from './types'
import { generateSlip } from './generate-slip'

describe('Deposit by slip', async () => {

    it('should create a new slip', async () => {
        const slip: DepositSlip = await generateSlip(20)

        assert.isNotNull(slip)
        assert.equal(slip.amount, 20)
        assert.equal(moment(slip.dueDate).format('yyyy-MM-dd'), moment().add(3, 'days').format('yyyy-MM-dd'))
        assert.isNotNull(slip.codeBar)
        assert.equal(slip.codeBar.length, 48)
    })
})