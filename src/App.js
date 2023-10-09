import React from 'react';
import { movies } from './movieDummy';
import Movie from './components/Movie'; 
import Detail from './components/Detail'; 

function App() {
 
  return (
    <div className="App">
      <ul>
        {movies.results.map((props) => (
          <li key={props.id}>
            <div className='align' >
              <Movie props={props} />
              <Detail props={props} />
            </div>
          </li>
          
        ))}
      </ul>
 
    </div>
  );
}

export default App;