import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
import { useEffect, useState } from "react";
import InvestmentTable from "./InvestmentTable";



export default function InvestmentField({duration,initialInvestment,annualInvestment,expectedReturn}) {

return(
    <>
    <tr>
    <td>{duration}</td>
    <td>{formatter.format(initialInvestment)}</td>
    <td>{formatter.format(annualInvestment)}</td>
    <td>{expectedReturn}%</td>
    

    </tr>
    </>






);
}
