

import { useState } from 'react'
// import {InputBox} from './components/InputBox'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  // console.log(options)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    
    <div
        className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
       
        
    ><div class="stars"></div>

    <div class="centered"><span class="cyberspace" data-text="CYBERSPACE">CURRENCY</span>
      <span class="cyberspace" data-text="RACEWAY"> CONVERTER</span>
      
    </div>
    
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <filter id="extrude">
          
          <feMorphology operator="erode" radius="0" in="SourceGraphic" result="erode" />
          <feMorphology operator="erode" radius="2" in="SourceGraphic" result="erode1" />
          <feMorphology operator="erode" radius="3" in="SourceGraphic" result="erode2" />
          <feMorphology operator="erode" radius="4" in="SourceGraphic" result="erode3" />
          <feMorphology operator="erode" radius="6" in="SourceGraphic" result="erode4" />
           <feComposite in="erode" in2="erode1" operator="out" result="main"/> 
          <feComposite in="erode1" in2="erode2" operator="out" result="stroke1"/>
          <feComposite in="erode2" in2="erode3" operator="out" result="stroke2"/>
          <feComposite in="erode3" in2="erode4" operator="out" result="stroke3"/>
          <feGaussianBlur in="stroke1" stdDeviation="0 10" result="stroke1-blur" />
          <feBlend in="stroke1-blur" mode="screen" result="stroke1-blur-blend"></feBlend>
          <feGaussianBlur in="stroke2" stdDeviation="0 10"  />
          <feOffset dx="0" dy="10" result="stroke2-blur"/>
          <feBlend in="stroke2-blur" mode="screen" result="stroke2-blur-blend"></feBlend>
          <feGaussianBlur in="stroke3" stdDeviation="0 25"  />
          <feOffset dx="0" dy="20" result="stroke3-blur"/>
          <feBlend in="stroke3-blur" mode="screen" result="stroke3-blur-blend"></feBlend>
          
          <feFlood result="floodFill" flood-color="rgba(0,0,0,0.7)" flood-opacity="1"/>
          <feComposite in="floodFill" in2="erode2" operator="in" result="black"/> 
          <feBlend in="black" mode="screen" result="letterInside"></feBlend>
          <feMerge>
            <feMergeNode in="stroke1-blur-blend"></feMergeNode>
            <feMergeNode in="stroke2-blur-blend"></feMergeNode>
          <feMergeNode in="stroke3-blur-blend"></feMergeNode>
            <feMergeNode in="main"></feMergeNode>
            <feMergeNode in="letterInside"></feMergeNode>
          </feMerge>
          
        </filter>
        <filter id="extrude1">
          
          <feOffset dx="1" dy="3" in="SourceGraphic" result="L1"/>
          <feMorphology operator="erode" radius="1" in="L1" result="L2" />
          <feOffset dx="1" dy="10" in="L2" result="L3"/>
    
     
     <feMerge result="trail">
       <feMergeNode in="L1" />
       <feMergeNode in="L3" />
    </feMerge>
    <feGaussianBlur in="trail" stdDeviation="3 0" result="trail-blur" />
    <feMerge>
       <feMergeNode in="trail-blur" />
       <feMergeNode in="SourceGraphic" />
    </feMerge>
      </filter>
      </defs>
    </svg>
      
              
        <div className="w-full">
        
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            amountDisable={false}
                            place_holder="Amount"
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.75"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable={false}
                            place_holder="Converted Amount"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
);
}

export default App;



// import { useState } from 'react'

// import './App.css'

// import useCurrencyInfo from './hooks/useCurrencyInfo'


// function App() {
//   const [amount ,setAmount] = useState(0)
//   const [from,setFrom]=useState("usd")
//   const [to,setTo]=useState("inr")
//   const [convertedAmount,setConvertedAmount]=useState(0)

//   const arr={}

//   // using hook
//   const currencyInfo=useCurrencyInfo(from)
//   // getting keys from the currencyInfo
// const options=Object.keys(currencyInfo)
// console.log(typeof(arr))
// // using swap function to smap the convertion rate according to the website
// const swap=()=>{
//   setFrom(to)
//   setTo(from)
//   setConvertedAmount(amount)
//   setAmount(convertedAmount)
// }
// // converting (multiplying)
// const convert=()=>{
//   setConvertedAmount(amount*currencyInfo[to])
// }


//   return (
//    <div 
//    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
//    style={{backgroundImage:`url('https://images.pexels.com/photos/4386292/pexels-photo-4386292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
//    >

//     <div className="w-full">

//       <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

//         <form
//           onSubmit={(e)=>{
//           e.preventDefault();
//           convert()
//       }}>
//           <div className='w-full mb-1'>
//           <InputBox 
//           label="from"
//           amount={amount}
//           currencyOptions={options}
//           onCurrencyChange={(currency)=>setAmount(amount)}
//           selectCurrency={from}
//           onAmountChange={(amount)=>setAmount(amount)}
//           />

//         </div>
//         <div className='relative w-full h-0.5'>
//           <button
//           type="button"
//           className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//           onClick={swap}>
//             swap
//           </button>
          
//         </div>
//         <div className='w-full mt-1 mb-4'>
//           <InputBox
//           label="to"
//           amount={convertedAmount}
//           currencyOptions={options}
//           onCurrencyChange={(currency)=> setTo(currency)}
//           selectCurrency={from}
//           amountDisable
//           />
//         </div>
//         <button type='submit'
//         className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
//           convert {from.toUpperCase()} to {to.toUpperCase()}
//           </button>
//         </form>
//       </div>
//     </div>
//    </div>
//   )
// }

// export default App
