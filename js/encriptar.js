
var phase = 0;
var buttonEncriptar= document.querySelector('#button-encriptar');
var textArea1 = document.querySelector('#area1');
var textArea2 = document.querySelector('#area2');

buttonEncriptar.addEventListener('click',function(){
    if(validarEntrada(textArea1.value)){
        if(validarCharts(textArea1.value)){
            textArea2.value=desencriptarEncriptarTexto(textArea1.value,"0");
            textArea1.value=null;
            cambiarImg(1);
        }
    }
});

function cambiarImg(state){
    var idImage1="image1";
    var idImage2="image2";
    var road1="Images/Triangle 0.png";
    var road2="Images/Triangle 1.png";
    if(state==0){
        document.getElementById(idImage1).src=road1;
        document.getElementById(idImage2).src=road1;
        phase = 0;
    }
    if(state==1){
        document.getElementById(idImage1).src=road2;
        document.getElementById(idImage2).src=road1;
        phase = 2;
    }
    if(state==2){
        document.getElementById(idImage1).src=road1;
        document.getElementById(idImage2).src=road2;
        phase = 1;
    }
}


function validarEntrada(value){
    var e=true;
    if(value<=0){
        alert("There's nothing");   
        e=false
    }
    return e;
}


function validarCharts(text){
    var reg = /[^\w \s]/gi
    if(!reg.test(text)){
        return true;
    }
    else{
        alert("Special characters are not allowed");
        return false;
    }
}


function desencriptarEncriptarTexto(text,type){
    let obj = {e : "enter",
               i : "imes",
               a : "ai",
               o : "ober",
               u : "ufat"     
            }
    if(type==1){
        obj=Object.entries(obj).reduce((acc, [key, value]) => (acc[value] = key, acc), {});
    }
   for(const elem in obj){
      var expreg = new RegExp(elem,"g");
      text = text.replace(expreg,
        function() { 
        return obj[elem];
        });
   } 
   return text;
} 
