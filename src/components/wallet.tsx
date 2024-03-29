import { useAccount, useConnect, useDisconnect } from "wagmi"
import { injected } from "wagmi/connectors" 

interface WalletProps {} 

export const Wallet: React.FC<WalletProps> = ({}) => {
   const { address } = useAccount() 

   const { connect } = useConnect()
 
   const { disconnect } = useDisconnect(); 

   if (address)
    return (
      <main>
        Connected to: {address} 
        <br/> 
        <button onClick={ () => disconnect() }>Disconnect</button>
      </main>
    )
   
    return <button onClick={ () =>   connect({ connector: injected() })  }>Connect Wallet </button>

}

