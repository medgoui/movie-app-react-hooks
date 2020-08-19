import React, { useState } from 'react';
import {Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';
import MovieList from '../MovieList/MovieList';
import Title from '../Title/Title';
import ReactStars from "react-rating-stars-component";

const MovieComponent = () => {
    const [search,setSearch]=useState('');
const [stars,setStars]=useState(0);
    const ratingChanged = (newRating) => {
        setStars(newRating);
    };
    return (
    <>
    <NavBar />
    <Title />
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setSearch(e.target.value)}/>
        <ReactStars
            count={5} 
            size={24}
            activeColor="#ffd700"
            onChange={ratingChanged}
        />
    </Form>
    <MovieList search={search} stars={stars} />
    </>
    );
}
export default MovieComponent;