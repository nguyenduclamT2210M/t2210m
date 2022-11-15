//code js
var x = 10;

x = "hello";  //dynamic dataype
var t = true;
console.log(x);   // print
var y = 20;

var z = y +10 //30
var k = x + y ;//hello 20 -> strcot()
var u = y + x ; // 20 hello
var o = y + "world";//20 work
var q = "hello " + "world";//helloworld20
var a= "20" + 10;//2010
console.log(a);
console.log(y);
var s= 20 + 10 + "a";//30a
if (y>10) {
}else if(y>15){

}else{

}
for (var j=0;j<10;j++){
    console.log("j="+j);
}
console.log("xin chao cac ban " +20 + ", chuc buoi sang tot lanh");
// gia tri cua y , gia tri dep
console.log("gia tri cua y ="+y+",gia tri dep");
console.log(`gia tri cua y = ${y}, gia tri dep`);
// khai bao 1 ham
function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5);
//var arr = [];
//arr[0] = 15;
//arr[1] = "abc";
//arr[2] = true;
//arr.push(17);
//arr.push("xyz");
//for(var i=0;i<arr.length;i++){
 //   console.log(arr[i]);
//}
//alert("Alertr");
//var rs =confirm("ban chac chan muon noop bai?");
//return boolean
//if (rs == true){
  //  console.log("nguoi dung dong y roi, lam gi lam di");

//}else{
  //  console.log("huy bo chien dich")
//}
 var s= prompt("vui long nhap ho ten");//return string
console.log(s);
// neu nhap -> string
//neu ko nhap + ok -> string rong
// neu ko nhap cancel -> null

//setInterval(function (){
  //  alert("hello");
//},300);
//setInterval(function (){
  //  console.log("i="+i);
    //i++;
//},3000000000000    )
var span_min =document.getElementById("minutes");
var span_sec = document.getElementById("second")
var min=10;
var sec=0;
var timer = setInterval(function (){
    var m = min<10?"0"+min:min;
    var s = sec<10?"0"+sec:sec;//toan tu 3 ngoi
   span_min.innerText = m ;
   span_sec.innerText = s ;
    sec--;
    if(sec<0){
        sec=59;
        min--;
    }
if (min<0){
    clearInterval(timer);
}
},100);
