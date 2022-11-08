import { useState } from "react"
import "../../index.css"

const ExpForm = (props) => {

    const [enteredName, SetName] = useState("")
    const [enteredAmount, SetAmount] = useState("")
    const [enteredDate, SetDate] = useState("")
    const [enteredid, Setid] = useState("")

    const [isValid, SetisValid] = useState(false)
    const [issValid, SetissValid] = useState(false)
    const [isssValid, SetisssValid] = useState(false)
    const [inValidBtn, setinValidBtn] = useState(false)

    const EnteredName = (event) => {
        if (event.target.value.trim().length > 0) {
            SetisValid(true)
        } else {
            SetisValid(false)
        }
        SetName(event.target.value)
        Setid(Math.random())
        // return;
    }


    const EnteredAmount = (event) => {
        if (event.target.value.trim().length > 0) {
            SetissValid(true)
        } else {
            SetissValid(false)
        }
        SetAmount(event.target.value)
    }

    const EnteredDate = (event) => {
        if (event.target.value.trim().length > 0) {
            SetisssValid(true)
        } else {
            SetisssValid(false)
        }
        SetDate(event.target.value)
    }

    const EnteredData = (event) => {

        event.preventDefault();


        const ReceivedData = {
            name: enteredName,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: enteredid
        }

        // if (ReceivedData.name.length != 0 || ReceivedData.amount.length == 0 || ReceivedData.date.length == 0) {
        //     console.log(true)
        //     SetisValid(false)
        //     SetissValid(false)
        //     SetisssValid(false)
        //     setinValidBtn(false)
        //     return;
        // }
        SetName("");
        SetAmount("");
        SetDate("");
        props.onAdd(ReceivedData);
    }

    return (
        <div className="ex_data_show form">
            <form className="exp" onSubmit={EnteredData} >
                <div className="container">
                    <div className="content">
                        <label >Expense Title</label>
                        <input type="text" key={props.key} value={enteredName} onChange={EnteredName} />
                    </div>
                    <div className="content">
                        <label >Expense AMOUNT</label>
                        <input type="number" key={props.key} value={enteredAmount} onChange={EnteredAmount} />
                    </div>
                    <div className="content">
                        <label>Expense DATE</label>
                        <input type="date" key={props.key} value={enteredDate} onChange={EnteredDate} />
                    </div>
                </div>
                <button className="btn" type="submit">ADD </button>
            </form>
        </div>
    )
}

// return (
//     <div className="form_container container">
//         <form action="">
//             <div className="data_container">
//                 <label htmlFor="">Expense Title</label>
//                 <input type="text" />
//             </div>
//             <div className="data_container">
//                 <label htmlFor="">Expense Title</label>
//                 <input type="text" />
//             </div>
//             <div className="data_container">
//                 <label htmlFor="">Expense Title</label>
//                 <input type="text" />
//             </div>
//         </form>
//         <div className="" >
//             <button className="btn">ADD</button>
//         </div>
//     </div>

// )
// }



export default ExpForm