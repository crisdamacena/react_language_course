import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
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


function FormularioCadastro({aoEnviar, validaCPF, validaNome, validaEmail}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [novidades, setNovidades] = useState(true);
    const [errosCpf, setErrosCpf] = useState({cpf:{valido:true, texto:""}});
    const [errosSobrenome, setErrosSobrenome] = useState({sobrenome:{valido:true, texto:""}});
    const [errosNome, setErrosNome] = useState({nome:{valido:true, texto:""}});
    const [errosEmail, setErrosEmail] = useState({email:{valido:true, texto:""}})

    return(
        <form
            onSubmit={(event) =>{
                    event.preventDefault();
                    aoEnviar({nome, sobrenome, cpf, email, novidades});
                }
            }    
        >
            <ThemeProvider theme={theme}>
                <TextField
                error={!errosNome.nome.valido}
                helperText={errosNome.nome.texto}
                id="nome" label="Nome" color="primary" fullWidth  margin="normal" value={nome}
                    onBlur={(event)=> {
                        const ehValido = validaNome(event.target.value);
                        setErrosNome({nome:ehValido})
                    }}
                    onChange={(event) => {
                        let tempNome = event.target.value;
                        if (nome.length >= 3){
                            tempNome = tempNome.substr(0,50);
                        }
                        setNome(tempNome);
                    }
                }/>

                <TextField 
                error={!errosSobrenome.sobrenome.valido}
                helperText={errosSobrenome.sobrenome.texto}
                id="sobrenome" label="Sobrenome" color="primary" fullWidth margin="normal" value={sobrenome} 
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
                    }
                }/>

                <TextField 
                    error={!errosCpf.cpf.valido}
                    helperText={errosCpf.cpf.texto}
                    id="cpf"
                    label="CPF"
                    color="primary"
                    fullWidth
                    margin="normal"
                    value={cpf}
                    onBlur={(event)=> {
                        const ehValido = validaCPF(event.target.value);
                        setErrosCpf({cpf:ehValido})
                    }}
                    onChange={(event) => {
                        let tempCPF = event.target.value;                       
                        if (cpf.length ==14){
                            tempCPF = tempCPF.substr(0,14);;
                        }
                        setCPF(tempCPF);
                    }                
                }/>

                <TextField
                error={!errosEmail.email.valido}
                helperText={errosEmail.email.texto}
                id="email" label="E-mail" color="primary" fullWidth margin="normal" value={email}
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
                    }                 
                }/>

                <FormControlLabel label="Deseja receber novidades por e-mail?" control={<Switch name="novidades" checked={novidades} onChange={(event) => {setNovidades(event.target.checked);}}/>}/>

                <Button fullWidth type="submit" variant="contained" color="primary">Baixar eBook</Button>
            </ThemeProvider>
        </form>
    );
}

export default FormularioCadastro;