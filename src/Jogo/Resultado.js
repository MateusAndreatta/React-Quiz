import React,{Component} from 'react'
import { Container,List } from 'semantic-ui-react';
import Resposta from './Resposta'

const resposta = {
    id:1,
    titulo: 'Primeira pergunta',
    alternativa: 3
}

class Resultado extends Component{
    render(){
        return(
            <div>
                <h2>Seus Resultados</h2>
                <p>Confira o seu desempenho nesta categoria</p>
                <Container>
                    <List divided verticalAlign='left'>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>

            </div>
        )
    }
}

export default Resultado