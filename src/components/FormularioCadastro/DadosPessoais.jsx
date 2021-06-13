import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel, createMuiTheme, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { validaNome } from '../../models/validaNome';
import { validaCPF } from '../../models/validaCPF';

function DadosPessoais({aoEnviar}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [errosCpf, setErrosCpf] = useState({cpf:{valido:true, texto:""}});
    const [errosSobrenome, setErrosSobrenome] = useState({sobrenome:{valido:true, texto:""}});
    const [errosNome, setErrosNome] = useState({nome:{valido:true, texto:""}});

    function possoEnviar(){
        if (!errosNome.nome.valido || !errosSobrenome.sobrenome.valido || !errosCpf.cpf.valido){
            return false;
        }
        else{
            return true;
        }
    }
    
    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            if (possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, novidades});
            }
        }}>
            <ThemeProvider theme={theme}>
                <TextField
                color="primary"
                error={!errosNome.nome.valido}
                fullWidth
                helperText={errosNome.nome.texto}
                id="nome"
                label="Nome"
                margin="normal"
                onChange={(event) => {
                    let tempNome = event.target.value;
                    if (nome.length >= 3){
                        tempNome = tempNome.substr(0,50);
                        }
                    setNome(tempNome);
                    }}
                onBlur={(event)=> {
                    const ehValido = validaNome(event.target.value);
                    setErrosNome({nome:ehValido})
                    }}
                value={nome}
                />

                <TextField
                    color="primary"
                    error={!errosSobrenome.sobrenome.valido}
                    fullWidth
                    helperText={errosSobrenome.sobrenome.texto}
                    id="sobrenome" label="Sobrenome"   margin="normal" value={sobrenome} 
                    onBlur={(event)=> {
                        const ehValido = validaNome(event.target.value);
                        setErrosSobrenome({sobrenome:ehValido})
                        }}
                    onChange={(event) => {
                        let tempSobrenome = event.target.value;                       
                        if (sobrenome.length > 3){
                            tempSobrenome = tempSobrenome.substr(0,3);
                        }
                        setSobrenome(tempSobrenome);
                        }}
                />

                <TextField
                    color="primary"
                    error={!errosCpf.cpf.valido}
                    fullWidth
                    helperText={errosCpf.cpf.texto}
                    id="cpf"
                    label="CPF"
                    margin="normal"
                    value={cpf}
                    onChange={(event) => {
                        let tempCPF = event.target.value;                       
                        if (cpf.length === 14){
                            tempCPF = tempCPF.substr(0,14);;
                        }
                        setCPF(tempCPF);
                        }}
                    onBlur={(event)=> {
                        const ehValido = validaCPF(event.target.value);
                        setErrosCpf({cpf:ehValido})
                        }}
                />

                <FormControlLabel
                    control={
                        <Switch
                            name="novidades"
                            checked={novidades}
                            onChange={(event) => {
                                setNovidades(event.target.checked);
                                }}
                        />
                        }
                    label="Deseja receber novidades por e-mail?"
                />

                <Button color="primary" fullWidth type="submit" variant="contained">
                    Baixar eBook
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

export default DadosPessoais;