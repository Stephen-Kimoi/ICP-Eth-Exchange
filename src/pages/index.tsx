import Head from "next/head"

import styles from "styles/Home.module.css"

import Greeting from "components/Greeting"
import Image from "next/image"

import Wallet from '../components/wallet' 
import { config } from "service/config" 
import { WagmiProvider } from "wagmi"

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to the Internet Computer starter template
        </h3>
        {/* <Greeting /> */} 
        <WagmiProvider config={config}>
          <Wallet /> 
        </WagmiProvider>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://internetcomputer.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={140}
            height={30}
            src="/icp-logo.svg"
            alt="DFINITY logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  )
}

export default HomePage
