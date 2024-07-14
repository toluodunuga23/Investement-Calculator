import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";



export default function InvestmentTable({duration,initialInvestment,annualInvestment,expectedReturn,totalInvested}) {
   

    const investmentField={
        initialInvestment:initialInvestment,
        annualInvestment:annualInvestment,
        expectedReturn:expectedReturn,
        duration:duration    
    }
const investing =calculateInvestmentResults(investmentField);
console.log("Investing Initial",investing);


// Loop through the results array and render a table row for each result


    let invested=[];
    invested[0]=initialInvestment+annualInvestment;
 
    for(let i=1;i<investing.length;i++){
        invested[i]=invested[i-1]+annualInvestment;
   
     
    }




const mapped= investing.map((item,i) => ({
...item, 
totalInterest: investing[i].interest+=investing[i-1]?investing[i-1].interest:0,
investedCapital: invested[i]
}));

console.log("mapped",mapped);



const listCalculations = mapped.map((result) => {


  
    return(
        
          <tr>
               <td>{result.year}</td>
               <td>{formatter.format(result.valueEndOfYear)}</td>
               <td>{formatter.format(result.interest)}</td>
               <td>{formatter.format(result.totalInterest)}</td>
                <td>{formatter.format(result.investedCapital)}</td>
               
          </tr>
     
    )
 
 
 })



return(

<div>
<table id="result">
    {listCalculations}
     <thead>
    <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      
    </tr>
    
    </thead>
   


</table>
</div>

)


}
