import React, {useState} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const MovieList = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie, setMovie] = useState([{title:"John Wick", description:"John Wick Movie", rating:3 , source:"johnwick.jpeg"}]);
    const [Titre,setTitre]=useState('')
    const [description,setDescription]=useState('')
    const [rating,setRating]=useState(0)
    const [src,setSrc]=useState('')
    const addMovie = (a,b,c,d) => {
        setMovie([...movie,{title:a, description:b, rating:d, source:c}]) 
        handleClose();
    };
        return (
        <>
        {
            movie.filter(el=>el.title.toLowerCase().includes(props.search.toLowerCase())).filter(el=>el.rating >= props.stars).map((el,i) => {
                return <MovieCard title={el.title} description={el.description} rating={el.rating} source={el.source} id={i} key={i} />;
            })
        }
        <div style={{textAlign:"center"}}>
        <Button variant="outline-primary"  onClick={handleShow}><i className="fa fa-plus-square"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <div>
        <Modal.Header closeButton >
        <Modal.Title><input type="text" placeholder="Movie Title" size="20" onChange={(event)=>setTitre(event.target.value)}/></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{paddingTop:"20px"}}>
            <input type="text" placeholder="Movie Description" size="50" onChange={(event)=>setDescription(event.target.value)} />
            <hr/>
            <input type="text" placeholder="Movie image destination" size="50" onChange={(event)=>setSrc(event.target.value)} />
            <hr/>
            <input type="text" placeholder="Movie Rating" size="20" onChange={(event)=>setRating(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>addMovie(Titre,description,src,rating)}>
            Add Movie
        </Button>
        </Modal.Footer>
        </div>
        </Modal>
        </div>
        </>
        );        
}
export default MovieList;