import React from 'react';
import { Typography } from '@material-ui/core';
import { ReactComponent as Checked } from '../../assets/checked.svg';

function Concluido(){
    return(
        <div>
            <Typography align="center" color="primary" variant="h2">Inscrição concluída!<br></br>
                <Checked width="60px"/>
            </Typography>            
        </div>
    );
}

export default Concluido;