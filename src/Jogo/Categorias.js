import React,{Component} from 'react'
import Categoria from './Categoria'
import {Grid, Container} from 'semantic-ui-react'
import Navegacao from './Navegacao'

class Categorias extends Component{
    render(){
        return(
            <div>
                <Navegacao/>
                <Container>
                    <h2>Lista de Categorias</h2>
                    <p>Selecione a categoria que quer responder</p>
                    

                    <Grid columns={5}>
                        <Grid.Row>
                            <Categoria  titulo='Esportes' icone='trophy'/>
                            <Categoria  titulo='Mundo'  icone='globe'/>
                            <Categoria  titulo='Musica'  icone='music'/>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )

    }
}

export default Categorias