import React from 'react';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import('@solana/wallet-adapter-react-ui/styles.css');
type Props = {
  readonly children: React.ReactNode;
};


export const SolanaWalletProvider: FC<Props> = ({ children }) => {
  const network = clusterApiUrl('mainnet-beta'); // You can change this to 'devnet' or 'testnet'
  const wallets = [new PhantomWalletAdapter()];
  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
        {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};