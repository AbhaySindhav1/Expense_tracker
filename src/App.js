import React, { useEffect, useState } from "react";
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


    const deleteItemsHandler = (id) => {
        let filterdedData = data.filter((item) => {
            return item.id !== id
        })
        setData([...filterdedData])
    }
    const totalHandler = () => {
        return getFilteredArray(data, year).reduce((total, current) => {
            return +total += +current.amount
        }, 0)

    }

    return (

        <div>
            <ExpForm key={data.id} onAdd={ReceivedObj} />
            <div className="ex_data_show">
                {/* <ExpenseChart Data={getFilteredArray(data, year)} />  */}
                <Filter setyear={setyear} year={year} data={data} />
                {
                    getFilteredArray(data, year).map((item, index) => {
                        return <Expenses key={item.id} id={item.id} Name={item.name} Amount={item.amount} Date={item.date} onDelete={deleteItemsHandler}
                            total={totalHandler} />
                    })
                }

                <div>Total Expense ={totalHandler()}</div>
            </div>
        </div>
    )
}

export default App
