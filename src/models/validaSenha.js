function validaSenha(senha){
    if(senha.length < 4 || senha.length > 10){
        return {valido:false, texto:"Senha deve ter entre 4 e 10 dígitos"};
    }
    else{
        return {valido:true, texto:"OK!"}
    }
}

export {validaSenha};