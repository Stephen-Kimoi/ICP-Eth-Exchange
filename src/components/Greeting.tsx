import React, { useState } from "react"
import { useUpdateCall } from "service/hello"

interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = ({}) => {
  const { call, error, loading, data } = useUpdateCall({
    functionName: "deposit_principal"
  }); 

  const [name, setName] = useState("")
  // let name = ""

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value
    setName(newName)
  }

  // const executeCall = () => {
  //   call("bkyz2-fmaaa-aaaaa-qaaaq-cai")
  // }

  return (
    <div>
      <section>
        <h2>Greeting</h2>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input
          id="name"
          alt="Name"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <button onClick={() => { console.log("Call is: ", call); }}>Send</button>
      </section>
      <section>
        <label>Response: &nbsp;</label>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
        {/* {data && <span>{JSON.stringify(data)}</span>} */}
      </section>
    </div>
  )
}

export default Greeting
