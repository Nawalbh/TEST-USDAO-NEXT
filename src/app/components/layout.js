"use client";
import { Inter } from "next/font/google";
import "./layout.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "../provider";
import { useRouter } from "next/navigation";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, goerli, sepolia } from "wagmi/chains";
import Header from "./header";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export default function Mainlayout({ children }) {
  const projectId = "bc73d7505fd406159d095af056d4f4d4";

  const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const chains = [goerli, mainnet, arbitrum, sepolia];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  // 3. Create modal
  createWeb3Modal({ wagmiConfig, projectId, chains });
  const router = useRouter();
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#07071C" }} className={inter.className}>
        {/* <h1 style={{ cursor: "pointer" }}>Home</h1> */}
        <WagmiConfig config={wagmiConfig}>
          <div className="header">
            <Header />
          </div>
          <Providers>
            <div>{children}</div>
          </Providers>
          <div className="footer">
            <Footer />
          </div>
        </WagmiConfig>
      </body>
    </html>
  );
}
