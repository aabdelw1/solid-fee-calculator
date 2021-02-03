import React, { useState } from 'react'
import RegisterNewItem from './RegisterNewItem'
import Items from './Items'

import styled from 'styled-components'
import { Heading, Pane, Text, TextInput, Button } from 'evergreen-ui'

const Columns = ['Register ', 'Items']

const DashboardContainer = styled.div`
  display:flex;
  flex: 1;
  max-height: 70vh;
  min-height: 70vh;
`

const Column = styled.div`
  flex: 1;
  background-color: #fafafa;
  border-radius: 2rem;
  margin-right: 5rem;
  margin-top: 10rem;
  margin-left:5rem;
  :last-of-type {
    margin-right: 5;
  }
  overflow: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;

`
const Home = () => {


  return <>
    <DashboardContainer>
      <Column>
        <RegisterNewItem/>
      </Column>
      <Column>
        <Items/>
      </Column>
    </DashboardContainer>
  </>
}

export default Home
