import React from 'react'
import { List, Label } from 'semantic-ui-react';

const Resposta = props => {
    return(
            <List.Item>
                <List.Content floated='left'>
                    <Label>{props.resposta.id}</Label>
                    {props.resposta.titulo}
                </List.Content>
                <List.Content floated='right'>{props.resposta.alternativa}</List.Content>
            </List.Item>
    )
}

export default Resposta