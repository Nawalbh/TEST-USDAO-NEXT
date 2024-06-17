"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, goerli, sepolia } from "wagmi/chains";
import { Providers } from "./provider";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const data = {
  title: "USDAO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const projectId = "bc73d7505fd406159d095af056d4f4d4";

  const metadatas = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const chains = [goerli, mainnet, arbitrum, sepolia];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadatas });
  createWeb3Modal({ wagmiConfig, projectId, chains });
  return (
    <html lang="en">
      <WagmiConfig config={wagmiConfig}>
        <body className={inter.className}>
          <div className="header">
            <Header />
          </div>
          <Providers>{children}</Providers>
          <div className="footer">
            <Footer />
          </div>
        </body>
      </WagmiConfig>
    </html>
  );
}
