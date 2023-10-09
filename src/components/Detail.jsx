import React from 'react';

function Detail({ props }) {
    return (
      <div>
          <table id='detail'>
          <thead>
              <tr>
                 <td>
                    <div>{props.title}</div>
              </td>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td >
                    <div>  {props.overview}</div>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
    );
  }

  
export default Detail