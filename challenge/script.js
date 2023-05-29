
/*mi textArea de ingreso*/
const mensajeContent = document.getElementById("txt-area"),
/*mi textArea de egreso */
mensajeContentResult = document.getElementById("mensaje"),
/*boton encriptar*/
           btnEncrpt = document.getElementById("btnEncript"),
/*boton desencriptar*/
        btnDesencrpt = document.getElementById("btnDesEncript"),
/*boton copiar*/
             btnCopy = document.getElementById("btnCopiar"),
/*declaracion de vocales*/
               vocal = ["e", "i", "a", "o", "u"],
/*declaracion de vocales encriptadas*/              
     vocalEncriptada = ["enter", "imes", "ai", "ober", "uber"];
       

/*FUNCION  ENCRIPTAR TEXTO*/
btnEncrpt.addEventListener("click",encriptarTexto);

  function encriptarTexto(){
      //obtengo el mensaje original desde el textArea de ingreso
    let mensajeOrig = mensajeContent.value;
    let texto = mensajeOrig;
    
    //document.getElementById("mensaje").value = "";
   // mensajeContentResult.style.backgroundImage="none";
    for(let i = 0; i< vocal.length; i++){
          texto = texto.replaceAll(vocal[i], vocalEncriptada[i]);
        }
              //muestro resultado en el textArea de egreso  
       mensajeContentResult.value=texto;
}


/*FUNCION  DESENCRIPTAR TEXTO*/
btnDesencrpt.addEventListener("click",descriptarTexto);
 function descriptarTexto(){
     //obtengo el mensaje original 
    let mensajeOrig = mensajeContent.value;
    let restexto = mensajeOrig;
    //clearText();
    for(let i = 0; i< vocal.length; i++){
          restexto = restexto.replaceAll(vocalEncriptada[i], vocal[i]);
      }
      
    document.getElementById("mensaje").value = "";
     //muestro resultado en el textArea de egreso  
      mensajeContentResult.value=restexto;
}

/*FUNCION COPIAR TEXTO*/
btnCopy.addEventListener("click",copiarTexto);
function copiarTexto(){
      if(mensajeContentResult.value != ""){ 
        mensajeContentResult.select();
        document.execCommand("copy");
       }
        else{
            alert("No hay texto a copiar");
        }
 

}