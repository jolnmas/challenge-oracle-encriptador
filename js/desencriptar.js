

var buttonDesencriptar= document.querySelector('#button-desencriptar');

buttonDesencriptar.addEventListener('click',function(){
    if(validarEntrada(textArea2.value)){
        if(validarCharts(textArea2.value)){
            textArea1.value=desencriptarEncriptarTexto(textArea2.value,"1");
            textArea2.value=null;
            cambiarImg(2);
        }
    }
});
