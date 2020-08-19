import React from 'react';
import { Card } from 'react-bootstrap';


const MovieCard = props => {
    return(
        <Card className="bg-dark text-white" style={{margin:"20px"}} id={props.id}>
        <Card.Img src={props.source} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>{props.rating}</Card.Text>
        </Card.ImgOverlay>
    </Card>
    );
}
export default MovieCard;