import React, {Component} from 'react'
import {Container, Card, Button, Header, Segment} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

import Navegacao from './Navegacao'
import config, {auth, providers} from './../config'

class Inicio extends Component {

    constructor(props){
        super(props)

        this.state = {
            usuario:{},
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if(usuario){
                console.log(usuario)
                this.setState({
                    usuario,
                    estaLogado: true
                })
                localStorage.setItem('nome',usuario.displayName)
                localStorage.setItem('foto',usuario.photoURL)
            } else{
                console.log("nao logou")
                this.setState({
                    estaLogado: false
                })
            }
        })
    }

    autentica(provider){
        auth.signInWithPopup(providers[provider])
    }

    render(){
        if(this.state.estaLogado){
            return <Redirect to='/categorias'/>
        }
        return(
            <div>
                <Navegacao/>
                <br></br>
                <Container>
                    <Segment piled>Quiz</Segment>
                    <Header as='h2'>Jogo de perguntas e respostas</Header>
                    <p>Desafie seus amigos nesse jogo!</p>
                    {
                        !this.state.estaLogado &&
                    <Card centered> 
                        <Card.Content>
                            Acesse agora mesmo
                        </Card.Content>
                        <Card.Content>
                            <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                            <Button color='twitter'>Login com Twitter</Button>
                            <Button basic color='blue'>Usuario Admin</Button>
                            
                        </Card.Content>     
                    </Card>
                    }
                    {
                        this.state.estaLogado &&
                        <div>
                            <h3>{this.state.usuario.displayName}</h3>
                            <img src={this.state.usuario.photoURL}/>
                        </div>

                    }
                </Container>
            </div>
        )
    }
}

export default Inicio
