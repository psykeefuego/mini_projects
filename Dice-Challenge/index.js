var num=Math.floor(Math.random() *6) +1;

var rimg="images/dice"+num+".png";

var pic1=document.querySelectorAll("img")[0];//select 1 img

pic1.setAttribute("src",rimg);//replace

//2
var num1=Math.floor(Math.random() *6) +1;

var rimg1="images/dice"+num1+".png";

var pic2=document.querySelectorAll("img")[1];

pic2.setAttribute("src",rimg1);

if(num>num1){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(num<num1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}