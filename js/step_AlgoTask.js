function reading(){
let reading_result = {}
reading_result.task_content = document.getElementById('task_content').innerText

reading_result.N = document.getElementById('N').innerText
N = console.log('reading: reading_result ', reading_result)
return reading_result
}



function converting(reading_result){
let converting_result = {}
converting_result.N = parseInt(reading_result.N)
console.log('converting: converting_result ', converting_result)
return (converting_result)
}



function solution(reading_result, converting_result){
console.log('solution: converting_result ',converting_result)
let N = converting_result.N
//let N = 21;
console.log('solution: N ', N)

if( N % 54 > 36 ){
    result2 = ', боковое место'
} else {
    result2 = ', купэ'
}

if( N % 2 == 0){
    result1 = 'верхнее место'
} else {
    result1 = 'нижнее место'
}
console.log(result1)
console.log(result2)

let result_data = {}
result_data.task_content = reading_result.task_content
result_data.N = N
result_data.result1 = result1
result_data.result2 = result2
console.log('solution: result_data ', result_data)
return (result_data)
}



function execution(){
reading_result = reading()
console.log('execution: reading_result ', reading_result)

converting_result = converting(reading_result)
console.log('execution: converting_result ', converting_result)

result_data = solution(reading_result,converting_result)
console.log('solution: result_data ', result_data)

writing(result_data)
}



function writing(result_data){
document.getElementById('result1').innerText = result_data.result1
document.getElementById('result2').innerText = result_data.result2
}


const ElementVerify = document.getElementById('verify');
ElementVerify.addEventListener('click',execution);
