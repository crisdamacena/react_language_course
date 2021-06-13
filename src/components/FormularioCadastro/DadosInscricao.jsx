import React, { useState} from 'react';
import { Button, TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

function DadosInscricao({aoEnviar}){
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro]= useState("");
    const [bairro, setBairro]= useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [localidade, setLocalidade]= useState("");
    const [UF, setUF] = useState("");

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({cep, logradouro, bairro, numero, complemento, localidade, UF})
        }}>
            <TextField
                color="primary"
                fullWidth
                id="cep"
                label="CEP"
                margin="normal"
                onChange={(event) => {
                    setCep(event.target.value);
                    }}
                type="number"
                value={cep}
            />

            <TextField
                color="primary"
                fullWidth
                id="endereco"
                label="Endereço"
                margin="normal"
                onChange={(event) => {
                    setLogradouro(event.target.value);
                    }}
                type="text"
                value={logradouro}
            />

            
            <TextField
                color="primary"
                fullWidth
                id="bairro"
                label="Bairro"
                margin="normal"
                onChange={(event) => {
                    setBairro(event.target.value);
                    }}
                type="text"
                value={bairro}
            />

            <TextField
                color="primary"
                fullWidth
                id="localidade"
                label="Cidade"
                margin="normal"
                onChange={(event) => {
                    setLocalidade(event.target.value);
                    }} 
                type="text"
                value={localidade}
            />

            <TextField
                color="primary"
                id="numero"
                label="Número"
                margin="normal"
                onChange={(event) => {
                    setNumero(event.target.value);
                    }}
                type="number"
                value={numero}
            />

            <TextField
                color="primary"
                id="complemento"
                label="Complemento"
                margin="normal"
                onChange={(event) => {
                    setComplemento(event.target.value);
                    }}
                type="text"
                value={complemento}
            />

            <TextField
                id="UF"
                label="UF"
                color="primary"
                margin="normal"
                onChange={(event) => {
                    setUF(event.target.value);
                    }}
                type="text"
                value={UF}
            />

            <ThemeProvider theme={theme}>
                <Button color="primary" fullWidth type="submit" variant="contained" >
                    Finalizar cadastro
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

export default DadosInscricao;
