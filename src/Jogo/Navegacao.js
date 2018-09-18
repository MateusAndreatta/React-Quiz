import React from 'react'
import {Link} from 'react-router-dom'
import {Menu,Image} from 'semantic-ui-react'

const Navegacao = props =>{
    const nome = localStorage.getItem('nome')
    const foto = localStorage.getItem('foto')
    return(
        <div>
            <header className="App-header">
                <h1 className="App-title">Jogo de perguntas e respostas</h1>
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                    <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                    <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                    <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item><Image avatar src={foto}/>{nome}</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </header>
        </div>
    )
}

export default Navegacao