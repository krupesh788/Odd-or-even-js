
function oddEven(){

    let num = parseInt(document.getElementById("num").value);


    if(num % 2 == 0 ){

        document.getElementById("p1").innerHTML = `${num} is Even. `;
    }

    else{

        document.getElementById("p1").innerHTML = `${num} is Odd. `;

    }
}