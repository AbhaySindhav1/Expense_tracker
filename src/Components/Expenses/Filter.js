import { useState } from "react"
import "../../index.css"


const Filter = (props) => {

    let arr = []
    props.data.forEach((ele, index) => {
        if (arr.length == 0) {
            arr.push(ele.date.getFullYear())
        } else {
            if (!arr.includes(ele.date.getFullYear())) {
                arr.push(ele.date.getFullYear())
            }
        }
        arr.sort()

    })

    const SelectedYear = (event) => {
        console.log(event.target.value)
        props.setyear(parseInt(event.target.value))
    }

    return (
        <div className="selection">
            <label htmlFor="Year">Filter By Year</label>
            <div className="year">

                <select id="Year" onChange={SelectedYear} value={props.year}>
                    <option value="" >All</option>
                    {arr.map((year, index) => {
                        return <option key={index} value={year}>{year}</option>
                    })}
                </select>

            </div>
        </div>
    )
}

export default Filter;