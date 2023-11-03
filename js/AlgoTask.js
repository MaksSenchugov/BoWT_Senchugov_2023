function verify() {
    console.log('N')
    let N = parseInt(SeatNumber.innerText);
    console.log(N)


    if( N % 54 > 36 ){
        result2 = ', боковое место'
        document.getElementById('result2').innerText = result2;
    } else {
        result2 = ', купэ'
        document.getElementById('result2').innerText = result2;
    }


    if( N % 2 == 0){
        result1 = 'верхнее место'
        document.getElementById('result1').innerText = result1;
    } else {
        result1 = 'нижнее место'
        document.getElementById('result1').innerText = result1;
    }
}



const SeatNumber = document.getElementById('N');


const ElementVerify = document.getElementById('verify');
ElementVerify.addEventListener('click',verify)
