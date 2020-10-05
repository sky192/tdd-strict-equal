var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../stringEquality')

describe('stringEquality', () => {
    describe('strictEqual', () => {
        it('true if varibles are same type and same value', () => {
            const x = 5
            const y = 5

            let answer = strictEqual(x, y)

            expect(answer).to.equal(true)
        })

        it('false if variables are same type, but different value', () => {
            const x = '5'
            const y = '7'

            let answer = strictEqual(x, y)

            expect(answer).to.equal(false)
        })

        it('false if variables are different type, but same value', () => {
            const x = 5
            const y = '5'

            let answer = strictEqual(x, y)

            expect(answer).to.equal(false)
        })

        it('false if varibles are different type and different value', () => {
            const x = 5
            const y = 'Rose'

            let answer = strictEqual(x, y)

            expect(answer).to.equal(false)
        })
    })
})