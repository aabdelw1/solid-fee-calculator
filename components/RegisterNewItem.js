import React, { useState, useEffect, useContext } from 'react'
import { Heading, Pane, Text, SegmentedControl, Button, SelectField, TextInput, toaster } from 'evergreen-ui'
import Component from '@reactions/component'
import { Context } from './Context'



const RegisterNewItem = () => {
  const [allItems, setAllItems, test, setTest] = useContext(Context)
  // const copyItems = allItems
  const date = new Date()

  const [item, setItem] = useState('')
  const [category, setCategory] = useState('Electronics')
  const [user, setUser] = useState(0)
  const [ad, setAd] = useState(25)
  const [price, setPrice] = useState(1)
  const [fee, setFee] = useState()

  const [day, setDay]  = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [year, setYear] = useState(date.getFullYear())


  const [priceError, setPriceError] = useState(false)
  const [dayError, setDayError] = useState(false)
  const [yearError, setYearError] = useState(false)


  const calculateFee = () => {
    var discount = user
    if(date.getDate() == day && date.getMonth() + 1 == month && date.getFullYear() == year){
      discount = discount + 10
    }
    return (parseInt(price) + ad) - discount 
  }

  useEffect(() => { 
    if(price < 0 || isNaN(price)){
      setPriceError(true)
      toaster.warning('Price must be positive integer')
    } else{
      setPriceError(false)
    }
  }, [price])
  useEffect(() => { 
    if(day < 1 || day > 31 || day == null){
      setDayError(true)
      toaster.warning('Day must be inbetween 1 and 31')
    } else{
      setDayError(false)
    }
  }, [day])
  useEffect(() => { 
    if(year < date.getFullYear() || year == null){
      setYearError(true)
      toaster.warning('Expiration cannot be in the past')
    } else {
      setYearError(false)
    }
  }, [year])

  const toogleSave = () => {
    const newItem = {
      item: item,
      category: category,
      userType: user,
      adType: ad,
      price: price,
      expiration: `${year}-${month}-${day}`,
      fee: setFee(calculateFee())
    }

    allItems.push(newItem)
    const newArr = [...allItems]
    setAllItems(newArr) 
    toaster.success('Successfully Added Item!')
    
    setItem('')
    setPrice(0)
  }

  return (
      <Pane display="flex" flexDirection="column" justifyContent="space-between">
        <Pane display="flex" flex={1} marginY='2rem' marginLeft="2rem" flexDirection="column">
          <Heading size={800}>Register New Item</Heading>
          <Pane marginLeft="3rem">
            <Pane display="flex" marginY="3.5rem">
                <Pane flex={1} alignItems="center" display="flex"><Text size={600}>Item Name:</Text></Pane>
                <Pane>
                  <TextInput
                    name="Price"
                    width={175}
                    required
                    marginRight="8rem"
                    placeholder="IPad Pro 100in"
                    validationMessage="Invalid Input"
                    value={item}
                    onChange={e => setItem(e.target.value)}
                  />
                </Pane>
              </Pane>
              <Pane display="flex" marginTop="-1rem">
                <Pane flex={1} alignItems="center" display="flex"><Text size={600}>Category:</Text></Pane>
                <Pane>
                  <SelectField marginRight="8rem"  marginY="auto" value={category} width="17.6rem" onChange={e => setCategory(e.target.value)}>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Home" defaultValue>Home</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Other" defaultValue>Other</option>
                  </SelectField>
                </Pane>
              </Pane>
            <Pane  display="flex" marginY="3rem">
              <Pane flex={1} alignItems="center" display="flex"><Text size={600}>User Type:</Text></Pane>
              <Pane>
                <Component
                  initialState={{
                    options: [{ label: 'Person', value: 0 }, { label: 'Company', value: 5 }],
                    value: 0,
                  }}
                >
                  {({ state, setState }) => (
                    <SegmentedControl
                      name="switch"
                      width={175}
                      height={30}
                      marginRight="8rem"
                      options={state.options}
                      value={state.value}
                      onChange={value => {
                        setUser(value)
                        setState({ value })}
                      }
                    />
                  )}
                </Component>
              </Pane>
            </Pane> 

            <Pane display="flex">
              <Pane flex={1} alignItems="center" display="flex"><Text size={600}>Ad Type:</Text></Pane>
              <Pane>
              <Component
                initialState={{
                  options: [{ label: 'Auction', value: 25 }, { label: 'Buy it Now', value: 35 }],
                  value: 25,
                }}
              >
                {({ state, setState }) => (
                  <SegmentedControl
                    name="switch"
                    width={175}
                    height={30}
                    marginRight="8rem"
                    // marginY="auto"
                    options={state.options}
                    value={state.value}
                    onChange={value => {
                      setAd(value)
                      setState({ value })}
                    }
                  />
                )}
              </Component>
              </Pane>

            </Pane> 
            <Pane display="flex" marginY="3.5rem">
              <Pane flex={1} alignItems="center" display="flex"><Text size={600}>Price:</Text></Pane>
              <Pane>
                <TextInput
                  name="Price"
                  width={150}
                  required
                  textAlign="right"
                  isInb
                  marginRight="1.5rem"
                  isInvalid={priceError}
                  validationMessage="Price must be positive numeric"
                  value={price}
                  onChange={e => !isNaN(e.target.value) && setPrice(e.target.value)}
                />
              </Pane>
              <Pane marginY="auto" marginRight="8rem"><Text size={600}>$</Text></Pane>
            </Pane>
            

            <Pane display="flex">
              <Pane flex={1} alignItems="center" display="flex"><Text size={600}>Expiration Date:</Text></Pane>
              <Pane>
                <TextInput
                  name="Day"
                  width={45}
                  required
                  placeholder="Day"
                  isInvalid={dayError}
                  marginRight={10}
                  validationMessage="Day has to be between 1 and 31"
                  value={day}
                  onChange={e => !isNaN(e.target.value) && setDay(e.target.value)}
                        
                />
              </Pane>
              <Pane>
              <SelectField marginRight="1rem" width="6rem" marginY="-0.4rem" value={month} onChange={e => setMonth(e.target.value)}>
                    <option value="1" defaultValue>January</option>
                    <option value="2">Febraury</option>
                    <option value="3">March</option>
                    <option value="4" >April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </SelectField>
              </Pane>
              <Pane>
              <SelectField marginRight="8rem" width="7rem" marginY="-0.4rem" value={year} onChange={e => setYear(e.target.value)}>
                    <option value="2020" defaultValue>2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>

                  </SelectField>
              </Pane>
            </Pane>
          </Pane>

        </Pane>
        <Pane display="flex" flexDirection="row" marginTop="3rem" marginLeft="2rem">
          <Pane display="flex" flex={1}>
            <Text marginLeft="1rem" size={600} color="muted">Item Fee:</Text>
            <Text marginLeft=".5rem" fontWeight="bold" size={600}>${calculateFee()}</Text>
          </Pane>
          <Pane marginRight={26} marginY="-1rem">
            <Button appearance="primary" disabled={priceError || dayError || yearError || item == ''} onClick={() => toogleSave()}>Submit</Button>
          </Pane>
        </Pane>
     </Pane>
  )
}


export default RegisterNewItem
