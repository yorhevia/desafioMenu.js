/* 
realizar una calculadora para calcular
1- Suma 
2- Resta 
3- Multiplicar
4- Dividir
5- Salir 

Nota: Tener en cuenta el menu se va repetir hasta que el ususario inidque la opcion salir
*/

//daclarar variables 

let op, num1, num2, resultado, rep=true;



do{
    op = parseInt(prompt("calculadora:  \n 1.suma  \n 2.Resta  \n 3.Multiplicacion  \n 4.Dividir  \n 5.salir"));
    console.log(op);

 switch(op){
    case 1:
      //suma
      console.log("suma");
      num1 = parseInt(prompt("ingrese el valor 1"))
     num2 = parseInt(prompt("ingrese el valor 2"))
     resultado = num1 + num2;
     console.log("el resultado es :" + resultado)
      
    break;
    case 2:
      //resta  
      console.log("resta");
      num1 = parseInt(prompt("ingrese el valor 1"))
     num2 = parseInt(prompt("ingrese el valor 2"))
     resultado = num1 - num2;
     console.log("el resultado es :" + resultado)
      
    break;

    case 3:
      //multiplicacion
      console.log("multiplicacion");
      num1 = parseInt(prompt("ingrese el valor 1"))
     num2 = parseInt(prompt("ingrese el valor 2"))
     resultado = num1 * num2;
     console.log("el resultado es :" + resultado)
      
    break;

    case 4:
      //division
      console.log("division");
     num1 = parseInt(prompt("ingrese el valor 1"))
     num2 = parseInt(prompt("ingrese el valor 2"))
     resultado = num1 / num2;
     console.log("el resultado es :" + resultado)
     
    break;
    case 5:
     //salir
     console.log("salir");
     rep=false;
    break;

    default:
        console.log("ingreso un opcion invalida")
    break;
}   
}while(rep);
