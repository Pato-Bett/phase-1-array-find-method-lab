// code your solution here
let superbowlWin = (record) =>{
    let yearWon = record.find(record=>record.result==="W")
    if (yearWon) {
        return yearWon.year
    }else{
        return undefined
    }
}