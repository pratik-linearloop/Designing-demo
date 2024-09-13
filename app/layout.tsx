'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    team1: { 500: '#FF6B6B' },
    team2: { 500: '#4ECDC4' },
    team3: { 500: '#45B7D1' },
    team4: { 500: '#F7B801' },
    team5: { 500: '#9B59B6' },
    team6: { 500: '#5D5D5D' },
  },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  )
}