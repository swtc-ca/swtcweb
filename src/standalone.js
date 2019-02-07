import TESTWP from './testwp'

var brorand = require('brorand')
//var base = require('jingtum-base-lib')
var jingtumlib = require('jingtum-lib')
const Wallet = jingtumlib.Wallet
const remote = new jingtumlib.Remote({server: 'wss://c04.jingtum.com:5020', local_sign: true})

remote.connect( (error, result) => {
	if (error) {
		console.log(error)
	} else {
		console.log(result)
	}
})

let iters = 0

setInterval( () => console.log(new jingtumlib.Wallet.generate()), 500 )
setTimeout( () => console.log(new brorand.Rand().generate(16)), 500 )
//setInterval( () => { console.log(iters++); console.log(Buffer.alloc(8)) }, 1000 )
//console.log(JSON.stringify(TESTWP))

