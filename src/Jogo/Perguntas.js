import React from 'react'
import { Grid,Container,Message,Button,Radio } from 'semantic-ui-react';
import Navegacao from './Navegacao'

const Perguntas = props =>{
    return(
        <div>
            <Navegacao/>
            <Container>
            <h2>{JSON.stringify(props)}</h2>
            <p>Mostre que você conhece tudo sobre esse assunto</p>
        
            <h3>Pergunta</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='yellow'>
                        <p>Alternativa 1</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='teal'>
                        <p>Alternativa 2</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='pink'>
                        <p>Alternativa 3</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='brown'>
                        <p>Alternativa 4</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br/>
            <Button>Finalizar</Button>
        </Container>
        </div>
    )
}

export default Perguntas