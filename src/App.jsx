import React from 'react'
import { useRef } from 'react';
import Header from './components/Header'
import InvestmentTable from './components/InvestmentTable'
import { useState } from "react";

function App() {
const [duration, setDuration] = useState(10);
const [initialInvestment, setInitialInvestment] = useState(15000);
const [annualInvestment, setAnnualInvestment] = useState(1200);
const [expectedReturn, setExpectedReturn] = useState(6);

const investmentValue = useRef();

const handleInitial=(e)=>{
  setInitialInvestment(e.target.value);
  // setInitialInvestment(investmentValue.current.value);
  console.log("Initial Investment",initialInvestment);

}

const handleAnnual=(e)=>{
  setAnnualInvestment(e.target.value);
  console.log("Annual Investment",annualInvestment);
}

const handleExpected=(e)=>{
  setExpectedReturn(e.target.value);
  console.log("Expected Return",expectedReturn);
}


const handleDuration=(e)=>{
  setDuration(e.target.value);
  console.log("Duration",duration);
}



  
  return (
<>
    <Header />
    <div id="user-input">
    <div className="input-group">
        <form>
        <label>Initial Investment</label>
        <input type="number" value={initialInvestment} onChange={handleInitial}/>
        {/* <input type="number" ref={investmentValue} onChange={handleInitial}/> */}
        </form>

</div>
 <div className="input-group">
    <form>
        <label>Annual Investment</label>
        <input type="number" value={annualInvestment} onChange={handleAnnual}/>
        </form>

    </div>


    <div className="input-group">
    <form>
        <label>Exepcted return</label>
        <input type="number" value={expectedReturn} onChange={handleExpected}/>
        </form>

    </div>

    <div className="input-group">
    <form>
        <label>Duration</label>
        <input type="number" value={duration} onChange={handleDuration}/>

        </form>
        

        

    </div>
     
  
</div>

<InvestmentTable duration={duration} initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} />
    </>
  )
}

export default App
