function validaEmail(email) {
    let regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
      return {valido:false, texto:"E-mail inválido!"};
    }
    return {valido:true, texto:"OK!"};
  }

  export {validaEmail};