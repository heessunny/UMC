import React, { useState } from "react";
import { movies } from '../movieDummy';
import Movie from '../components/Movie/Movie';
import Detail from '../components/Detail/Detail';

function Movies() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (id) => {
      setHoveredItem(id);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    }; 
 
  return (
    <div>
      <ul>
        {movies.results.map((props) => (
          <li key={props.id}>
            <div
              className="user-wrap"
              onMouseEnter={() => handleMouseEnter(props.id)} // Make sure to define handleMouseEnter
              onMouseLeave={handleMouseLeave} // Make sure to define handleMouseLeave
            >
              <Movie props={props} />
              {hoveredItem === props.id && (
                <div className='user-text'>
                  <Detail props={props} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;