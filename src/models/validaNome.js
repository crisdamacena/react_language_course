function validaNome(entrada){
    if(entrada.length <= 1) return {valido:false, texto:"Muito curto. Digite mais um pouco!"}
  
    let regNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    if(!regNome.test(entrada)){
      return {valido:false, texto:"Caracteres inválidos!"};
    }
  
    return {valido:true, texto:"OK!"};
}

export {validaNome};