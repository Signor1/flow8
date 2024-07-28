import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN_ID = 1115;

const sepolia = {
  chainId: SUPPORTED_CHAIN_ID,
  name: "Core Blockchain TestNet",
  currency: "tCORE",
  explorerUrl: "https://scan.test.btcs.network/",
  rpcUrl: import.meta.env.VITE_RPC_URL,
};

const metadata = {
  name: "Flow8 Token Streaming",
  description: "A Token Streaming Application",
  url: "http://localhost:5173/", // origin must match your domain & subdomain
  icons: ["http://localhost:5173/"],
};

export const configWeb3Modal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [sepolia],
    projectId: import.meta.env.VITE_PROJECT_ID,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
  });
