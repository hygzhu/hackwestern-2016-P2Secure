var Web3 = require('web3')
var solc = require('solc')
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
console.log(web3);
var collatlendingContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"settle","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"forfietCollat","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_user","type":"address"},{"name":"_balance","type":"uint256"}],"name":"setBalance","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_lenderAddr","type":"address"},{"name":"_collat","type":"uint256"},{"name":"_loanPayment","type":"uint256"}],"name":"initLending","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"getBalance","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]);


var collatlending = collatlendingContract.new(
     {
            from: web3.eth.accounts[0], 
            data: '6060604052600060036000505560006004600050555b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506103e860026000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b61056c806100a76000396000f360606040523615610074576000357c01000000000000000000000000000000000000000000000000000000009004806311da60b41461007957806345a3816c1461008d578063a9059cbb146100a1578063e30443bc146100dd578063f4c38aa114610103578063f8b2cb4f1461013257610074565b610002565b346100025761008b6004805050610163565b005b346100025761009f6004805050610242565b005b34610002576100c56004808035906020019091908035906020019091905050610321565b60405180821515815260200191505060405180910390f35b346100025761010160048080359060200190919080359060200190919050506103ea565b005b34610002576101306004808035906020019091908035906020019091908035906020019091905050610423565b005b346100025761014d600480803590602001909190505061052e565b6040518082815260200191505060405180910390f35b60046000505460026000506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190555060036000505460026000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540192505081905550600060046000508190555060006003600050819055505b565b60046000505460026000506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054019250508190555060036000505460026000506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540192505081905550600060046000508190555060006003600050819055505b565b600081600260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101561036357600090506103e4565b81600260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600260005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540192505081905550600190506103e4565b92915050565b80600260005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055505b5050565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508160036000508190555060046000505460026000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555060036000505460026000506000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540392505081905550806004600050819055505b505050565b6000600260005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610567565b91905056', 
            gas: 4700000
          }, function (e, contract){
           console.log(e, contract);
           if (typeof contract.address !== 'undefined') {
                      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                 }
             })
var addr;
var myContract = collatlendingContract.new({from: web3.eth.accounts[0], gas: 1000000}, function(e, contract){
    if(!e) {

          if(!contract.address) {
                  console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

                } else {
                  addr = contract.address;
                  console.log("Contract mined! Address: " + contract.address);
                  console.log(contract);
                }

        }   
})
console.log(web3.eth.accounts[0])
