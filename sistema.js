let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    
    if(contador == 0){
        console.log("Numero atual é ZERO")
    }else if(contador % 2 != 0){
        console.log("O numero é "+ contador + " impar")
    }else{
        console.log("O numero é " + contador + " Par")
    }
    
}