import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from './clock'
import Counter from './counter'
import Nav from './nav'
import Head from 'next/head'

import { ChakraProvider } from "@chakra-ui/react"

export default function Page({title, description}) {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <ChakraProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <Clock />
      <Counter />
    </ChakraProvider>
  )
}
