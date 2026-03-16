import { useEffect,useState } from "react";
import { cryptoCurrencies } from "../constants/cryptoCurrencies";

function useCurrencyInfo(currency){
    const [data, setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=> {
            
            const filtered = Object.fromEntries(
           Object.entries(response[currency]).filter(
             ([code]) => !cryptoCurrencies[code]
           )
        )

        setData(filtered);
        
        });
            
    },[currency])

    return data

}

export default useCurrencyInfo
  
    
        
   
       




