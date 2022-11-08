import React, { useState } from "react";
import "./index.css"
import Expenses from "./Components/Expenses/Expenses";
import ExpForm from "./Components/Expenses/Exp_Form";
import Filter from "./Components/Expenses/Filter";
import { data as dataAll } from "./data"
import ArrFilter from "./logic/ArrFilter";
import ExpenseChart from "./Components/chart/ExpenseChart";

function App() {

    const [data, setData] = useState(dataAll)
    const [year, setyear] = useState("")

    const ReceivedObj = (FormObj) => {
        setData(prevData => {
            return [{ ...FormObj }, ...prevData]
        })
    }

    const getFilteredArray = (data, year) => {
        return ArrFilter(data, year)
    }

    return (

        <div>
            <ExpForm key={data.id} onAdd={ReceivedObj} />
            <div className="ex_data_show">
                {/* <ExpenseChart Data={getFilteredArray(data, year)} />  */}
                <Filter setyear={setyear} year={year} data={data} />
                {
                    getFilteredArray(data, year).map((item, index) => {
                        return <Expenses key={item.id} id={item.id} Name={item.name} Amount={item.amount} Date={item.date} />
                    })
                }

            </div>
        </div>
    )
}

export default App