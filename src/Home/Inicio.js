import React from 'react'
import {Container, Card, Button, Header, Segment} from 'semantic-ui-react'

const Inicio = props =>{
    return(
        <div>
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
                        <Button basic color='blue'>Login com Facebook</Button>
                        <Button basic color='green'>Usuario Admin</Button>
                        
                    </Card.Content>     
                </Card>
            </Container>

        </div>
    )
}

export default Inicio