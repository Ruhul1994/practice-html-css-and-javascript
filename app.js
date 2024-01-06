// function paragraphChange(){
//   document.getElementById('demo4').innerHTML= 'thank you ruhul your dedication for this learning;'
// }

// //document.write('this is Ruhul sir');

// function getAlert(){
//   alert('Are you ok sir');
// }

// console.log(4+6);
// let rohim, korim, jamal;
// rohim = 32;
// korim = 23;
// jamal = rohim + korim;
// document.getElementById('demo5').innerHTML=`jamal total is=${jamal}`;

function colorChange() {
  let headings = document.getElementsByClassName("hading");
  for(let i = 0; i < headings.length; i++){
    if(headings[i].style.color==="red"){
      headings[i].style.color="blue"
    }else{
      headings[i].style.color="red"
    }
  }
}

function myFunction() {
  var x = document.getElementsByClassName("hading");
  for (var i = 0; i < x.length; i++) {
    
    if(x[i].style.display === "none"){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }

  }
}

function lightON_Off(ws){
let pic;
if(ws == 0){
pic = "picture/pic_bulboff.gif"
}else{
  pic ="picture/pic_bulbon.gif"
}
document.getElementById("imageCollection").src= pic;
}