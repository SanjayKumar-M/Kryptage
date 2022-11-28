import '../Styles/App.css'
import Main from './Main'
import Web3 from 'web3'
// import Kryptage from '../Utils/kryptageABI.json'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.hardhat, chain.goerli, chain.polygonMumbai,],
  [
    alchemyProvider({ apiKey: "7LGvqMTpRaoj6JIzhVdCYZW-GWmnOihO" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
const App = () => {
  
  return (
    <div className='container'>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>

          <Main />

        </RainbowKitProvider>
      </WagmiConfig>

    </div>
  )
}
export default App