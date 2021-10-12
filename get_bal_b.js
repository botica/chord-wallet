//usuingn browserify to compile this
// output js file used called get_bal.js

const { Harmony } = require('@harmony-js/core');
const {
  ChainID,
  ChainType,
  hexToNumber,
  numberToHex,
  fromWei,
  Units,
  Unit,
} = require('@harmony-js/utils');

const hmy = new Harmony(
  'https://api.harmony.one',
  {
    chainType: ChainType.Harmony,
    chainId: ChainID.HmyMainnet,
  }
);
  
async function get_balance(){
    const x = await hmy.blockchain.getBalance({address: 'one1cxese2lgcj0xtzmty46cuusuhzkl6umag987lr'});
    const bal = fromWei(hexToNumber(x.result), Units.one);
    const int_bal = Math.floor(bal);
    console.log('there are ' + int_bal + ' ONE at this address');
    setOnes(int_bal);
}

function setOnes(ones){
  var elem = document.getElementById('ones');
  elem.innerHTML = ones;
}

get_balance();
