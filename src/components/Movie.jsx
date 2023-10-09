import React from 'react';

function Movie({ props }) {
  return (
    <div>
        <table>
        <thead>
            <tr>
                <td colSpan="2" height="0"> <div className='image'><img src={props.poster_path} alt={props.title}  /></div> 
            </td>
            </tr>
            </thead>
            <tbody>
            <tr className='text'>
                <td className='title'>
                    {props.title}
                </td>
                <td className='vote'>
               {props.vote_average}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Movie;

