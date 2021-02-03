import React, { useState, useContext, useEffect } from 'react'
import { Heading, Pane, Text, TextInput, Button, SearchInput, Select, Icon } from 'evergreen-ui'
import styled from 'styled-components'
import { Context } from './Context'
import Card from './Card'

const ColumnContainer = styled.div`
  flex: 1;
  background-color: #fafafa;
  border-radius: .5rem;
  margin-right: 1rem;
  :last-of-type {
    margin-right: 0;
  }
  overflow: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`

const Items = () => {
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false)

  const [allItems, setAllItems] = useContext(Context)


  return (
    <ColumnContainer>
      <Pane display="flex" flexDirection="row" marginTop="2rem" marginLeft="2rem">
        <Heading marginLeft="1rem" size={800} flex={1}>Items</Heading>
        <Text marginLeft=".5rem"  marginTop="0.5rem"marginRight={16} size={600}>Total: {allItems && allItems.length}</Text>
      </Pane>
      { loading &&
        <Pane>
          <Spinner margin="auto" marginTop="2rem"/>
        </Pane>
      }
      { allItems.length == 0 &&
        <Pane display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="10rem">
          <Pane><Text color="muted" size={600}>😥</Text></Pane>
          <Pane><Text color="muted">No Items in Listing</Text></Pane>
        </Pane>
      }
    <Pane marginTop="2.5rem">
      {
        allItems.length > 0 && allItems.map((item, index) => {
            return <Card index={index} data={item}/>
        })
      }
    </Pane>
    </ColumnContainer>
  )
}


export default Items