import React from 'react'
import { List, Label,Icon } from 'semantic-ui-react';

const Resposta = props => {
    const {pergunta, resposta, key, acertou} = props
    return(
        <List.Item>
            <List.Content floated='left'>
                <Label>*</Label>
                {pergunta}
            </List.Content>
            <List.Content floated='right'>
            {acertou && <Icon name='thumbs up outline'/>}
            {!acertou && <Icon name='thumbs down outline'/>}
                </List.Content>
            <List.Content floated='right'>
            {resposta}
                </List.Content>
        </List.Item>
    )
}

export default Resposta