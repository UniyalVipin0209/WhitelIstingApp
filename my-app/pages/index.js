import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Web3Modal from'web3modal'
import { walletconnect } from 'web3modal/dist/providers/connectors';
import ConnectToWalletConnect from 'web3modal/dist/providers/connectors/walletconnect';

export default function Home() {

  const [walletconnected,setWalletconnected] = useState(false);
  const [numOfWhiteListed, setNumOfWhiteListed] = useState(0);
  const web3ModalRef= useRef();

  useEffect(()=>{
    if(!walletconnected){
        web3ModalRef.current= new Web3Modal({
          network: "ropsten",
          providerOptions:{},
          disableInjectedProvider:false,          
        });
        ConnectToWalletConnect();
      }// if WalletConnected ends here
    }, [walletconnected]);

  return (
  <div>
        <head>
          <title>WhiteList DApp</title>
          <meta name="description" content="whitelist-DApp"></meta>
        </head>
        <div className={styles.main}> 
          <h1 className={styles.title}>Welcome to Crypto Devs!!!!</h1>  

          <div className={styles.description}>
            {numOfWhiteListed} have already joined the Whitelist!!
          </div> 
          <div className={styles.Image} src="./crypto-devs.svg">

          </div>
        </div>
        <footer className={styles.footer}>
        Made with &#10084; Crypto Devs
        </footer>

  </div>
  )
}
