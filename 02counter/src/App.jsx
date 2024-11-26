// import React, { useState } from "react";

// import './App.css'
// import RegistrationForm from "./RegistrationForm";


// function App() {

//   let [counter, setCounter] = useState(15)



//   const addValue =() =>{
//     if(counter<25){
//       setCounter(counter+1)
//     }
//     else{
//       console.log('exceed clicks')
//     }
  
//   }

//   const removeValue = ()=>{
//     if(counter>0){

   
//     setCounter(counter-1)
//     console.log("value removed", counter)
//   }
//   else{
//     console.log('cannt be negative');
//   }
//   }

//   return (
//   <>
//   <RegistrationForm />
//   <h1>
//     Chai Aur react
//   </h1>
//   <h2>
//     Counter Value:{counter}
//   </h2>
//   <button onClick={addValue}>
//     Add Value{counter}
//   </button > <br />
// <button onClick={removeValue}>Remove Value {counter}</button>
//   </>
//   )
// }

// export default App


import React, { useState } from "react";
import './App.css';
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import ImageCarousel from "./ImageCarousel";

function App() {
  const [showRegistration, setShowRegistration] = useState(true);

  return (
    <div className="app-container">
      {showRegistration ? (
        <>
  
          <RegistrationForm  />
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowRegistration(false)} className="link-button">
              Log in
            </button>
          </p>
        </>
      ) : (
        <>
          <LoginForm />
          <ImageCarousel />
          <p>
            Don't have an account?{" "}
            <button onClick={() => setShowRegistration(true)} className="link-button">
              Register
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
