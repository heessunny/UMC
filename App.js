import React, { useState } from "react";
import { movies } from './movieDummy';
import Movie from './components/Movie/Movie'; 
import Detail from './components/Detail/Detail'; 

function App() {
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
              onMouseEnter={() => handleMouseEnter(props.id)}
              onMouseLeave={handleMouseLeave}>
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

export default App;