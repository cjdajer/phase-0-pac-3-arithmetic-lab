function add(a, b){
    return(a + b)
}
add("1", "2")

function subtract(a, b){
    return(a - b)
}
subtract("1", "2")

function multiply(a, b){
    return(a * b)
}
multiply("1", "2")

function divide(a, b){
    return(a / b)
}
divide("2", "2")

function increment(n){
    return(n += 1 )
}
increment("2")

function decrement(n){
    return(n -= 1)
}
decrement("2")


//-------------------------------------------
function makeInt(string){
    return parseInt(string, 10)
}
makeInt()

function preserveDecimal(string){
    return parseFloat(string)
}
preserveDecimal()