import React from 'react'
import {Container, Card, Button, Header, Segment} from 'semantic-ui-react'

import Navegacao from './Navegacao'

const Inicio = props =>{
    return(
        <div>
            <Navegacao/>
            <br></br>
            <Container>
                <Segment piled>Quiz</Segment>
                <Header as='h2'>Jogo de perguntas e respostas</Header>
                <p>Desafie seus amigos nesse jogo!</p>
                
                <Card centered> 
                    <Card.Content>
                        Acesse agora mesmo
                    </Card.Content>
                    <Card.Content>
                        <Button color='facebook'>Login com Facebook</Button>
                        <Button color='twitter'>Login com Twitter</Button>
                        <Button basic color='blue'>Usuario Admin</Button>
                        
                    </Card.Content>     
                </Card>
            </Container>
        </div>
    )
}

export default Inicio
