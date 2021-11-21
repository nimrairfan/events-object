///////////question 1////////

function alertBox(){
    alert("Hello Welcome To JS Land")
}

///////question 2////////
function image1(){
    alert("Thanks for puchasing a phone from us")
}
function image2(){
    alert("Thanks for puchasing a phone from us")
}
function image3(){
    alert("Thanks for puchasing a phone from us")
}
function image4(){
    alert("Thanks for puchasing a phone from us")
}

function deletebtn1(){
    var table = document.getElementsByTagName("tr")
    table[1].style.display="none"

}
function deletebtn2(){
    var table = document.getElementsByTagName("tr")
    table[2].style.display="none"

}
function deletebtn3(){
    var table = document.getElementsByTagName("tr")
    table[3].style.display="none"

}
function deletebtn4(){
    var table = document.getElementsByTagName("tr")
    table[4].style.display="none"

}

function bulbtoggle(value,pics){
    if(value == 1){
        pics.src = "./images/cat noir.jpg"
    }
    else{
        pics.src = "./images/lady bug.jpg"
    }
}
var count = 0;
var btn = document.getElementById("btn");
var num = document.getElementById("number");

btn.onclick = function () {
    count++;
    num.innerHTML = count;
}
var count1 = -100;
var btn = document.getElementById("btn2");
var num = document.getElementById("number");

btn.onclick = function () {
    count--;
    num.innerHTML = count;
}