import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@material-ui/core';
import {Button} from '@material-ui/core';

function App() {
  return (
    <Fragment>
        <header >
            <div className="row">
                <div className="column1 hero">
                  <h1 className="titulo">English Courses</h1>
                  <h3 className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim su</h3>
                  <Button className="botaotitulo" variant="contained" color="primary">Get started</Button>                
                </div>
                <div className="column2 language">
                </div>
            </div>
        </header>
        <div>
            <div className="form">
              <Container maxWidth="sm">
                <h1 className="titulo tituloform">Subscribe now!</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim su </h2>
                <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF} validaNome={validaNome} validaEmail={validaEmail}/>
              </Container>
            </div>
        </div> 
    </Fragment>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

/*function testaTipoParametroString(cpf){
  return typeof CPF !== "string"
}*/

function ehCPFinvalido(cpfSemSimbolos) {
  return !cpfSemSimbolos ||
      cpfSemSimbolos.length != 11 ||
      cpfSemSimbolos == "00000000000" ||
      cpfSemSimbolos == "11111111111" ||
      cpfSemSimbolos == "22222222222" ||
      cpfSemSimbolos == "33333333333" ||
      cpfSemSimbolos == "44444444444" ||
      cpfSemSimbolos == "55555555555" ||
      cpfSemSimbolos == "66666666666" ||
      cpfSemSimbolos == "77777777777" ||
      cpfSemSimbolos == "88888888888" ||
      cpfSemSimbolos == "99999999999";
}

function verificaPrimeiroDigitoVerificador(cpfSemSimbolos){
  var acumuladorTesteDigito;
  var restoPrimeiroDigito;
  acumuladorTesteDigito = 0;
  
  for (var index=1; index<=9; index++){
      const digitoAtual = cpfSemSimbolos.substring(index-1, index);
      const numeroMultiplicador = (11 - index);
      acumuladorTesteDigito = acumuladorTesteDigito + parseInt(digitoAtual) * numeroMultiplicador;
  }
  restoPrimeiroDigito = (acumuladorTesteDigito * 10) % 11;

  if ((restoPrimeiroDigito == 10) || (restoPrimeiroDigito== 11)){
      restoPrimeiroDigito = 0;
  }
  const primeiroDigitoVerificador = cpfSemSimbolos.substring(9, 10);
  const testaPrimeiroDigitoVerificador = restoPrimeiroDigito != parseInt(primeiroDigitoVerificador)
  
  return testaPrimeiroDigitoVerificador
}

function verificaSegundoDigitoVerificador(cpfSemSimbolos){
  var acumuladorTesteDigito;
  var restoSegundoDigito;
  acumuladorTesteDigito = 0;
  
  for (var index=1; index<=10; index++){
      const digitoAtual = cpfSemSimbolos.substring(index-1, index);
      const numeroMultiplicador = (12 - index);
      acumuladorTesteDigito = acumuladorTesteDigito + parseInt(digitoAtual) * numeroMultiplicador;
  }
  restoSegundoDigito = (acumuladorTesteDigito * 10) % 11;

  if ((restoSegundoDigito == 10) || (restoSegundoDigito== 11)){
      restoSegundoDigito = 0;
  }
  const segundoDigitoVerificador = cpfSemSimbolos.substring(10, 11);
  const testaSegundoDigitoVerificador = restoSegundoDigito != parseInt(segundoDigitoVerificador)
  
  return testaSegundoDigitoVerificador
}

function validaCPF(cpf) {
  /*if (testaTipoParametroString(cpf)) return {valido:false, texto:"CPF ser uma string"}*/

  const cpfSemSimbolos = cpf.replace(/[\s.-]*/igm, '')

  if (ehCPFinvalido(cpfSemSimbolos)) return {valido:false, texto:"CPF inválido!"}
  
  if (verificaPrimeiroDigitoVerificador(cpfSemSimbolos)) return {valido:false, texto:"CPF inválido!"}

  if (verificaSegundoDigitoVerificador(cpfSemSimbolos)) return {valido:false, texto:"CPF inválido!"}

  return {valido:true, texto:"OK!"};
}

function validaNome(entrada){
  if(entrada.length <= 1) return {valido:false, texto:"Muito curto. Digite mais um pouco!"}

  let regNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  if(!regNome.test(entrada)){
    return {valido:false, texto:"Caracteres inválidos!"};
  }

  return {valido:true, texto:"OK!"};
}

function validaEmail(email) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regEmail.test(email)){
    return {valido:false, texto:"E-mail inválido!"};
  }
  return {valido:true, texto:"OK!"};
}

export default App;
