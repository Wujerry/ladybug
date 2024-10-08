'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { ConnectKitProvider } from 'connectkit'
import { config } from './config'

const queryClient = new QueryClient()
export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider mode='dark'>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
