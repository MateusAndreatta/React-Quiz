import React,{Component} from 'react'
import Categoria from './Categoria'
import {Grid, Container} from 'semantic-ui-react'
import Navegacao from './Navegacao'
import config from './../config'

class Categorias extends Component{
    constructor(props){
        super(props)

        this.state ={
            categorias: {}
        }

        config.syncState('categorias', {
            context: this,
            state: 'categorias',
            asArray: false
        })
    }

    render(){
        return(
            <div>
                <Navegacao/>
                <Container>
                    <h2>Lista de Categorias</h2>
                    <p>Selecione a categoria que quer responder</p>


                    <Grid columns={5}>
                        <Grid.Row>
                            

                            {
                                Object.keys(this.state.categorias)
                                    .map(key => {
                                        return <Categoria key={key} titulo={this.state.categorias[key].nome} icone={this.state.categorias[key].icone} />
                                    })
                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )

    }
}

export default Categorias