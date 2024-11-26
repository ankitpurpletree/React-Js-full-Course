import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  
  const [length, setLength ] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef
  const passwordInputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for (let i = 1; i <length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
 
    setPassword(pass)
    

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPassowordClipboard = useCallback(() =>{
    passwordInputRef.current?.select()
    passwordInputRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
    
  }, [password] )

 useEffect(() => {
  passwordGenerator()
 },[length,numberAllowed,charAllowed] )



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
Password Generator
<div className='flex justify-between items-center rounded-lg'>
  <input type="text"
  value={password}
  className='outline-none w-full py-1 px-3 rounded-xl mb-3'
  placeholder='password'
  readOnly
  ref={passwordInputRef}

  
  />
    <button onClick={copyPassowordClipboard}  className='rounded-md mb-3 ml-3 bg-blue-600 text-cyan-50'
    
    >Copy  </button>

</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
<input type="range"
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e) => setLength(e.target.value)}
/>
<label>length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={() => {
      setNumberAllowed((prev) => !prev);
    }}
/>
<label htmlFor="numberInput">Numbers</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={charAllowed}
    id="characterInput"
    onChange={() => {
      setCharAllowed((prev) => !prev);
    }}
/>
<label htmlFor="characterInput">Characters</label>
  </div>
</div>
    </div>
      </>
  )
}

export default App
