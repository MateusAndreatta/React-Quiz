import React,{Component} from 'react'
import {Container,List} from 'semantic-ui-react'

import Usuario from './Usuario'

class Ranking extends Component{
    render(){
        return(
            <Container>
                <h2>Ranking</h2>
                <p>Top jogadores</p>
                <List divided verticalAlign='left'>
                    <Usuario 
                    foto=''
                    nome='Mateus Andreatta'
                    pontos='100'/>

                    <Usuario 
                    foto=''
                    nome='Kamylle Wilgozz'
                    pontos='100'/>

                    <Usuario 
                    foto=''
                    nome='Natanael'
                    pontos='89'/>
                </List>
                
            </Container>
        )
    }
}

export default Ranking