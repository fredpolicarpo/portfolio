/* tslint:disable no-unused-expression */
import { expect } from 'chai'

import canGenerateSlip from './can-generate-slip'

describe('Can generate slip', async () => {
    it('should allow generate slip for amount greater then 20', async () => {
        expect(canGenerateSlip(21)).to.be.true
    })

    it('should allow generate slip for amount equals to 20', async () => {
        expect(canGenerateSlip(20)).to.be.true
    })

    it('should not allow generate slip for amount less then 20', async () => {
        expect(canGenerateSlip(19.9999)).to.be.false
    })
})