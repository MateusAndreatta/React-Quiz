import React from 'react'
import {List,Image} from 'semantic-ui-react'

const Usuario = ({foto,nome,pontos}) =>{
    return(
        <List.Item>
            <List.Content floated='left'>
                <Image avatar src={foto}/>
                {nome}
            </List.Content>
            <List.Content floated='right'>
                {pontos} pontos
            </List.Content>
        </List.Item>
    )  
}

export default Usuario
