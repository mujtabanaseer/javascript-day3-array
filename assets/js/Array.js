//----------------------day 3 java script ----------------------
let array = [2, 4, 8, "this is array assignment in java script day 3"];

function array_function(array) {
    console.log(array[3])
    console.log("a = " + array[0])
    console.log("b = " + array[1])
    console.log("c = " + array[2])
    let plus = array[0] + array[2]
    let minus = array[2] - array[0]
    let multiply = array[1] * array[2]
    let divide = array[2] / array[0]
    console.log("a+c = " + plus)
    console.log("c-a = " + minus)
    console.log("b*c = " + multiply)
    console.log("c/a = " + divide)
}
array_function(array)