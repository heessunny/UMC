import React from "react";
import { movies } from '../movieDummy';
import Movie from '../components/Movie/Movie';


function Movies() {

    return (
      <div>
        <ul>
          {movies.results.map((props) => (
            <li key={props.id}>
            <Movie props={props} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Movies;