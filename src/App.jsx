import './App.css'
import Dashboard from "./page/Dashboard";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId
const projectId = '57c3ed3f7633af987eda789d503edfee'

// 2. Create wagmiConfig
const metadata = {
  name: 'web3-modal-setup',
  description: 'Web3 Modal Example',
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Dashboard/>
      </WagmiConfig>
    </>
  )
}

export default App