
const ArrFilter = (data, year) => {

    const filteredArray = data.filter((ele, id) => {
        if (!year) {
            return true;
        }

        if (ele.date.getFullYear() !== year) {
            return false;
        } else {
            return true
        }

    })
    return filteredArray;
}



export default ArrFilter

