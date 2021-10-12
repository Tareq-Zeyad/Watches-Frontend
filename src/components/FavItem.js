import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class FavItem extends React.Component{

    deleteThis=()=>{
        const obj={
            title: this.props.item.title,
            description: this.props.item.description,
            toUSD: this.props.item.toUSD,
            image_url: this.props.item.image_url,
            email: this.props.auth0.user.email,
            id: this.props.item._id

        }
        this.props.deleteItem(obj);
    }

    render(){
        return(
            <>
             <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text> Text: {this.props.item.description} </Card.Text>
                        <Card.Text> Price: {this.props.item.toUSD} </Card.Text>

                        <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props.item)}>Update</Button>
                        <Button variant="danger" onClick={this.deleteThis}>Delete</Button>

                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default withAuth0(FavItem);