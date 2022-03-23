
//key = AVCFO68PCBB6K2JJ7TNX
const fetchApi = async (route) => {
    // Proxy https://api.cryptowat.ch
  let usdtList = []
  const response = await fetch(route+'?apikey=AVCFO68PCBB6K2JJ7TNX')
  const res = await response.json();

  res.result.forEach(item=>{
      if(item.pair.slice(-4)==='usdt'){
        usdtList.push(item)
      }

  })

  console.log(usdtList.slice(0,100))
}

export default fetchApi