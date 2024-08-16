import React, { useCallback, useEffect } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
export const SolanaConnect: React.FC = () => {
  const navigate = useNavigate();
  const { publicKey, connect,wallet, disconnect,connected } = useWallet();
  const { setVisible } = useWalletModal();

  // useEffect(() => {
  //   if (publicKey) {
  //     navigate("/chat");
  //   }
  // }, [publicKey, navigate]);
  
  const handleConnect = async () => {
    try {
      await connect();
      if (publicKey) {
        navigate("/chat");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      // Handle error (optional)
    }
  };

  

  const handleClick = useCallback(async () => {
    if (wallet) {
      await connect().catch(() => {
        // Handle errors if any
      });
      navigate("/chat");
    } else {
      setVisible(true);
    }
  }, [wallet, connect, setVisible]);

  return (
    <div>
      {/* {connected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : ( */}
        <button
          className="bg-white coming-soon-shadow text-[#0000FF] uppercase font-jbm text-[15px] lg:text-[24px] p-2 lg:p-4 w-[90%] mx-auto mt-5 sm:w-full"
          onClick={handleClick}
        >
          Connect N GO RETARD
        </button>
        <button onClick={disconnect}>Disconnect</button>
      {/* )} */}
    </div>
  );
};
