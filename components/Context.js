import React, { useState } from 'react'

const Context = React.createContext({})

const ContextProvider = (props) => {
  // const { children } = props

  var items = [
    {
      item: "IPad Pro",
      category: "Electronics",
      userType: "Person",
      adType: "Auction",
      price: 1200,
      expiration: "2021-1-29",
      fee: 25
    },
    {
      item: "Yeezes",
      category: "Shoes",
      userType: "Person",
      adType: "Buy it Now",
      price: 300,
      expiration: "2021-3-1",
      fee: 25

    },
    {
      item: "Diesel Jeans",
      category: "Clothes",
      userType: "Company",
      adType: "Auction",
      price: 60,
      expiration: "2020-12-09",      
      fee: 25
    }
  ]
  
  const [allItems, setAllItems] = useState([])

  return (
    <Context.Provider value={[allItems, setAllItems]}>
      {props.children}
    </Context.Provider>
  )
}
export { Context, ContextProvider }

