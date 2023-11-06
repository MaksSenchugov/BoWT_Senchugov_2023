function verify() {
    console.log('N')
    let N = parseInt(SeatNumber.value);
    console.log(N)


    if( N % 2 == 0){
    result1 = 'верхнее место'
    document.getElementsByTagName('span')[2].innerText = messageText1 + result1;
    document.getElementsByName('result1')[0].value = result1;
    check1 = true
    } else {
    result1 = 'нижнее место'
    document.getElementsByTagName('span')[2].innerText = messageText1 + result1;
    document.getElementsByName('result1')[0].value = result1;
    check1 = false
    }


    if( N % 54 > 36 | N % 54 == 0 ){
        result2 = 'боковое место'
        document.getElementsByTagName('span')[3].innerText = messageText2 + result2;
        document.getElementsByName('result2')[0].value = result2;
        check2 = true
    } else {
        result2 = 'купэ'
        document.getElementsByTagName('span')[3].innerText = messageText2 + result2;
        document.getElementsByName('result2')[0].value = result2;
        check2 = true
    }

}





function send(){
if ((check1 | check2) && N > 0){
let textCondition = document.getElementsByTagName('p')[0].innerText
document.getElementsByName('formulation')[0].value = textCondition;
document.getElementsByName('result1')[0].value = result1;
document.getElementsByName('result2')[0].value = result2;
document.getElementById('UserEnter').submit();
}else{
alert("Есть недостатки. Повторите ввод")
}
}
function verify_send(){
verify();
send();
}


let messageText1 = document.getElementById('result1').innerText
console.log(messageText1)
let result1;
let check1 = false;

let messageText2 = document.getElementById('result2').innerText
console.log(messageText2)
let result2;
let check2 = false;

const SeatNumber = document.getElementById('N');
SeatNumber.addEventListener('input', verify)


const ElementVerify = document.getElementById('verify');
ElementVerify.addEventListener('click', verify)

const ElementSend = document.getElementById('send');
ElementSend.addEventListener('click',send)
