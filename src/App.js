import React,{useEffect} from 'react';
import fetchApi  from './Api/FetchApi';


function App() {
  useEffect(() => {
      
    fetchApi('markets/binance');
  },[])


  
  return (
      // use Container to pass data and map it.
      <div className="App">

      </div>
  )
}

export default App;
