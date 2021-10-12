import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class HomeItem extends React.Component {

    addToFavorites=()=>{
        const obj={
            title: this.props.item.title,
            description: this.props.item.description,
            toUSD: this.props.item.toUSD,
            image_url: this.props.item.image_url,
            email: this.props.auth0.user.email,

        }
        this.props.addToFavoritesPage(obj);
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text> {this.props.item.description} </Card.Text>
                        <Card.Text> {this.props.item.toUSD} </Card.Text>

                        <Button variant="primary" onClick={this.addToFavorites}>Add to Favorites</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default withAuth0(HomeItem);