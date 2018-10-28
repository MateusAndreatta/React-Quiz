import React,{Component} from 'react'
import { Container,List } from 'semantic-ui-react';
import Resposta from './Resposta'
import Navegacao from './Navegacao'

class Resultado extends Component{
    render(){
        const {resultado, pontos} = this.props.location.state
        return(
            <div>
                <Navegacao/>
                <h2>Seus Resultados</h2>
                <p>Confira o seu desempenho nesta categoria</p>
                <Container>
                    <List divided>
                    {
                        Object.keys(resultado)
                            .map(key => {
                                return (
                                <Resposta 
                                pergunta={resultado[key].pergunta} 
                                resposta={resultado[key].resposta} 
                                acertou ={resultado[key].acertou}
                                key={key}/>
                            )})
                    }
                    </List>
                </Container>
                <h3>Total {pontos} Pontos</h3>
            </div>
        )
    }
}

export default Resultado