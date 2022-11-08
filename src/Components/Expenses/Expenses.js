import "../../../src/index.css"

function Expenses(props) {
    const Day = new Date(props.Date).toLocaleString("en-US", { day: "2-digit" })
    const Month = props.Date.toLocaleString("en-US", { month: "long" })
    const Year = props.Date.getFullYear()
    return (

        <div className="main" >

            <div className="Exp_date card">
                <div>{Year}</div>
                <div>{Month}</div>
                <div className="day">{Day}</div>
            </div>
            <div className="Ex_name">
                {props.Name}
            </div>
            <div className="Ex_amount">
                {props.Amount}
            </div>
        </div>
    )
}
export default Expenses