//O vento DOM é acionado quando todo HTML foi completamente carregado

document.addEventListener('DOMContentLoaded', function (){
    
    
    //tipos de dados
    //string: sequencia de caracter 
    //Number: números inteiros ou pontos flutuantes (10.4)
    //boolean: Retorna dois valores, true ou false
    //object: estrturas de dados que podem amarzenar múltiplos valores
    //Null: quando está vazio
    //array: objeto especial ordenado 
    //bloco de código reutilizável
    
    //const é usado pra declarar uma váriavel cujo o valor é permanente

    const teste = 50;
    

    // LET è usado para de declarar váriaveis que os valores podem ser retribuidos
    let C = 0;
    C = 10;
    console.log(C);

    const notaMedia = 4;

    if ( notaMedia >= 6 ){
        //alert("Aluno passou");
    }

    else if ( notaMedia > 4 && NotaMedia < 6) {
        //alert("Quase passou");
    }

    else{
        //alert("Aluno reprovou!");
    }

    // ------------------------ OPERADORES -----------------------------------

    // = sinal de atribuição
    // == sinal de comparação
    // === verefica se os dois são iguais e têm o mesmo tipo de dados
    // != se é diferente 
    // !== se é estritamente diferente 
    // > maior 
    // < menor 

    
    const num = "6";
    if (num === 6) {
       // alert("é igual")
    }
 
    else{
    // alert("O tipo de dados é diferente");
    }


    
    const professor = "lucas";
    if (professor == 'lucas'){
        console.log('sim é lucas')
    }

    else {
        console.log('não é lucas')
    }
})