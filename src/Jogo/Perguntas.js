import React, {Component} from 'react'
import { Grid,Container,Message,Button,Radio,Icon,Progress } from 'semantic-ui-react';
import Navegacao from './Navegacao'
import axios from 'axios'
import _ from 'lodash'

class Perguntas extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0
        }   

        this.proximaPergunta = this.proximaPergunta.bind(this)
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
                console.log("Erro aconteceu");
                
            })
    }

    proximaPergunta(){
        const {perguntaAtual, totalPerguntas} = this.state
        if(perguntaAtual<totalPerguntas-1){
            this.setState({perguntaAtual: this.state.perguntaAtual + 1})
        }else{
            //Terminou as perguntas
        }
    }

   renderPergunta(pergunta){
       return(
           <span>
            <h3>{pergunta.titulo}</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='yellow'>
                        <p>{pergunta.alternativas[1].resposta}</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='teal'>
                        <p>{pergunta.alternativas[2].resposta}</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Message color='pink'>
                        <p>{pergunta.alternativas[3].resposta}</p>
                        <Radio toggle/>
                    </Message>
                    </Grid.Column>
                    <Grid.Column>
                    <Message color='brown'>
                        <p>{pergunta.alternativas[4].resposta}</p>
                        <Radio toggle/>
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
                this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]])
                    //return this.renderPergunta(this.state.perguntas.perguntas[key], key)
            }
                <Progress value={this.state.perguntaAtual +1} total={item.length} progress="ratio"/>
                <Button onClick={this.proximaPergunta}>Próxima</Button>
            </Container>
            </div>
        )
    }

}

export default Perguntas