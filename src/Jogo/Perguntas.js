import React, {Component} from 'react'
import { Grid,Container,Message,Button,Radio,Icon,Progress } from 'semantic-ui-react';
import Navegacao from './Navegacao'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'

class Perguntas extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0,
            resposta: {},
            pontos: 0,
            resultado: [],
            terminei: false
        }   

        this.proximaPergunta = this.proximaPergunta.bind(this)
        this.onRadioChange = this.onRadioChange.bind(this)
    }

    componentDidMount(){
        this.carregaPerguntas(this.props.match.params.nome)
    }
    
    carregaPerguntas(cat){
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })

        const url = `https://quizreact.firebaseio.com/categorias.json?orderBy="nome"&equalTo="${cat}"`
        console.log(url)
        axios.get(url)
            .then(dados => {
                const chave = Object.keys(dados.data)[0]
                const listaDePerguntas = dados.data[chave]
                console.log("perguntas", listaDePerguntas)
                this.setState({
                    estaCarregando: false,
                    perguntas: listaDePerguntas,
                    totalPerguntas: _.size(listaDePerguntas)
                })
            })
            .catch(err => {
                console.log("Erro aconteceu")
            })
    }

    proximaPergunta(){
        const {perguntaAtual, totalPerguntas} = this.state
        if(perguntaAtual<totalPerguntas-1){
            this.setState({perguntaAtual: this.state.perguntaAtual + 1})
        }else{
            console.log("PONTUAÇÃO", this.state.pontos)
            this.setState({terminei:true})
        }
    }

    onRadioChange = (e,{resposta, name}) => {
        this.setState({resposta})
        const respostaJogador = resposta
        const respostaCorreta = _.filter(this.state.perguntas.perguntas[name].alternativas, {'correta' : true})[0].resposta
        const acertou = (respostaJogador === respostaCorreta)
        console.log("resposta jogador", respostaJogador)
        console.log("resposta correta", respostaCorreta)
        console.log(acertou)

        const res = {
            pergunta: this.state.perguntas.perguntas[name].titulo,
            resposta,
            acertou
        }
        this.setState({resultado: [... this.state.resultado, res]})
        if(acertou){
            this.setState({pontos: this.state.pontos +1})
        }
    }

    renderPergunta(pergunta,id){ 
       return(
           <span>
            <h3>{pergunta.titulo}</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='yellow'>
                        <p>{pergunta.alternativas[1].resposta}</p>
                        <Radio 
                            toggle
                            name={id}
                            checked={this.state.resposta === pergunta.alternativas[1].resposta}
                            resposta={pergunta.alternativas[1].resposta}
                            onChange={this.onRadioChange}
                            />
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='teal'>
                        <p>{pergunta.alternativas[2].resposta}</p>
                        <Radio 
                            toggle
                            name={id}
                            checked={this.state.resposta === pergunta.alternativas[2].resposta}
                            resposta={pergunta.alternativas[2].resposta}
                            onChange={this.onRadioChange}
                            />
                    </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='pink'>
                        <p>{pergunta.alternativas[3].resposta}</p>
                        <Radio 
                            toggle
                            name={id}
                            checked={this.state.resposta === pergunta.alternativas[3].resposta}
                            resposta={pergunta.alternativas[3].resposta}
                            onChange={this.onRadioChange}
                            />
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='brown'>
                        <p>{pergunta.alternativas[4].resposta}</p>
                        <Radio 
                            toggle
                            name={id}
                            checked={this.state.resposta === pergunta.alternativas[4].resposta}
                            resposta={pergunta.alternativas[4].resposta}
                            onChange={this.onRadioChange}
                            />
                    </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </span>
       )
   }
    
    render(){
        let item =[]
        if(this.state.estaCarregando){
            return <p>Carregando...</p>
        }
        if(this.state.terminei){
            return(
                <Redirect to= {{
                    pathname: '/resultado',
                    state: {
                        resultado: this.state.resultado,
                        pontos: this.state.pontos
                    }}
                } />
            )   
        }
        return(
            <div>
                <Navegacao/>
                <Container>
                <h2><Icon name={this.state.perguntas.icone}/> {this.props.match.params.nome}</h2>
                <p>Mostre que você conhece tudo sobre esse assunto</p>
            
            {
                this.state.perguntas.perguntas && Object.keys(this.state.perguntas.perguntas)
                    .map(key => {
                        item.push(key)
                    })
            }
            {
                this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]], item[this.state.perguntaAtual])
            }
                <Progress value={this.state.perguntaAtual +1} total={item.length} progress="ratio"/>
                <Button onClick={this.proximaPergunta}>Próxima</Button>
            </Container>
            </div>
        )
    }

}

export default Perguntas