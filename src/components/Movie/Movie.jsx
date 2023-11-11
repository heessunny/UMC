import React from 'react';
import * as S from './Movie.style';

function Movie({ props }) {
  return (
    <div>
        <S.Table>
        <thead>
            <tr>
                <S.Td colSpan="2" height="0"> <S.Img src={props.poster_path} alt={props.title} />
            </S.Td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <S.Title className='title'>
                    {props.title}
                </S.Title>
                <S.Vote className='vote'>
               {props.vote_average}
                </S.Vote>
            </tr>
            </tbody>
        </S.Table>
    </div>
  );
}

export default Movie;

