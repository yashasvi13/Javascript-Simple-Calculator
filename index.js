var box1 = document.getElementById('display');
  function addtoscreen(x){
    box1.value+=x;
    if(x==='C')
      {
        box1.value="0";
    }
    
  }
function answer(){
  x=box1.value;
  x=eval(x);
  box1.value=x;
}
function power(){
  x=box1.value;
  x=eval(x*x);
  box1.value=x;
}
function backspace(){
  var y=box1.value;
  var len=y.length-1;
  var z=y.substring(0,len);
  box1.value=z;
}