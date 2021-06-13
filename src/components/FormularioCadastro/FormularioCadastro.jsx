import React, {useEffect, useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosInscricao from './DadosInscricao';
import Concluido from './Concluido';
import { Stepper, StepLabel, Step, createMuiTheme, ThemeProvider} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b71c1c',
          },
          secondary: {
            main: blue['A200'],
        },
    },
    typography: {
        button: {
          fontSize: '2.5rem',
        },
    },
  });


function FormularioCadastro({aoEnviar}){
    const [etapaAtual, setEstapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        console.log(dadosColetados);
        if(etapaAtual === formularios.length){
            aoEnviar(dadosColetados)
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados}/>,
        <DadosInscricao aoEnviar={coletarDados}/>,
        <Concluido/>]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }
    function proximo(dados){
        setEstapaAtual(etapaAtual+1);
    }

    return(
        <div className="estiloform">
            <ThemeProvider theme={theme}>
                <Stepper activeStep={etapaAtual}>
                    <Step><StepLabel>Login</StepLabel></Step>
                    <Step><StepLabel>Dados</StepLabel></Step>
                    <Step><StepLabel>Inscriação</StepLabel></Step>
                    <Step><StepLabel>Finalização</StepLabel></Step>
                </Stepper>
            </ThemeProvider>
            {formularios[etapaAtual]}
        </div>
    );
}

export default FormularioCadastro;