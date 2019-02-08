import { expect } from 'chai'
var JingtumLib = require('jingtum-lib')

describe('Biolerplate test', () => {
	it( 'true expected to be true', () => {
		expect( true ).to.be.true
	})
	it( 'false expected to be false', () => {
		expect( false ).to.be.false
	})
	it( 'Wallet expected to be function', () => {
		expect( typeof JingtumLib.Wallet  ).to.be.equal('function')
	})
})
