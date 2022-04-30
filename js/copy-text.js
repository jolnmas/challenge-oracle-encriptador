
var buttonCopy= document.querySelector('#button-copy-text');

buttonCopy.addEventListener('click',function(){
  if(phase==0){
      alert("There's nothing to copy!");
  }
  if(phase==1){
    textArea1.select() 
    document.execCommand('copy');
  }
  if(phase==2){
    textArea2.select() 
    document.execCommand('copy');
  }
});