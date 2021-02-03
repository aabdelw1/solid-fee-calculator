import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'
import { ContextProvider } from '../components/Context'

const home = () => (
  <div>
    <ContextProvider>
    <Head>
      <title>Solid Fee Calculator</title>
      <link rel='icon'/>
    </Head>
    <Home />
    </ContextProvider>
  </div>
)

export default home
