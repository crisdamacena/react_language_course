import { Fragment } from 'react';
import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Button, Container, createMuiTheme, ThemeProvider} from '@material-ui/core';
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

function App() {
  return (
    <Fragment>
        <header >
            <div className="row">
                <div className="column1 hero">
                  <h1 className="titulo">English Courses</h1>
                  <h3 className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim su</h3>
                  <ThemeProvider theme={theme}>
                    <Button className="botaotitulo" variant="contained" color="primary">Get started</Button>
                  </ThemeProvider>
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
                <FormularioCadastro aoEnviar={aoEnviarForm}/>
              </Container>
            </div>
        </div> 
    </Fragment>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
