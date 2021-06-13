import React, { useState } from 'react';
import {Button, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { validaSenha } from '../../models/validaSenha';
import { validaEmail } from '../../models/validaEmail';

function DadosUsuario ({aoEnviar}){
    const [email, setEmail] = useState("");
    const [errosEmail, setErrosEmail] = useState({email:{valido:true, texto:""}});
    const [senha, setSenha] = useState("");
    const [errosSenha, setErrosSenha] = useState({senha:{valido:true, texto:""}});


    function possoEnviar(){
        if (!errosSenha.senha.valido || !errosEmail.email.valido){
            return false;
        }
        else{
            return true;
        }
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if (possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
        <TextField
            color="primary"
            error={!errosEmail.email.valido}
            fullWidth
            helperText={errosEmail.email.texto}
            id="email"
            label="E-mail"
            margin="normal"
            onBlur={(event)=> {
                const ehValido = validaEmail(event.target.value);
                    setErrosEmail({email:ehValido})
                }}
            onChange={(event) => {
                let tempEmail = event.target.value;
                if (email.length > 3){
                    tempEmail = tempEmail.substr(0,100);
                }
                setEmail(tempEmail);
                }}
            value={email}
        />

        <TextField
            autoComplete="current-password"
            color="primary"
            error={!errosSenha.senha.valido}
            fullWidth
            helperText={errosSenha.senha.texto}
            id="standard-password-input"
            label="Senha"
            margin="normal"
            onBlur={(event)=> {
                const ehValido = validaSenha(event.target.value);
                    setErrosSenha({senha:ehValido})
                }}
            onChange={(event) => {
                setSenha(event.target.value);
                }}
            value={senha}
            type="password"
        />

        <ThemeProvider theme={theme}>
            <Button color="primary" fullWidth type="submit" variant="contained">
                Cadastrar
            </Button>
        </ThemeProvider>
        </form>
    );
}

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

export default DadosUsuario;