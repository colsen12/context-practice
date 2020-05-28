import React, { useContext } from 'react';
import { MovieContext } from "../context/MovieContext";

export default function Nav() {

const [movie, setMovie] = useContext(MovieContext);

	return (
		<div className="nav-wrapper">
			<h3>Name</h3>
			<p>List of movies:{movie.length}</p>
		</div>
	)
}