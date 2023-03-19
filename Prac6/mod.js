console.log("This is custom module.")

function hypo(a, b){
    c = Math.sqrt(a**2 + b**2)
    return c
}


/*function average(arr){
    let sum = 0
    arr.forEach(element => {
        sum =+ element
    });
    return sum/arr.length
}*/


/*module.exports = {
    avg : average,
    name : "Aman",
    performing : "NodeJS"
}*/

module.exports = hypo