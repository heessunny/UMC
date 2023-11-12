import React, { useState } from 'react';


function LoginControl() {
    const[login, setIsLogged] = useState(true);

    const handleToggleClick = () => {
      setIsLogged(!login)
    }

    return (
      <div className="login">
        <ul>
        <li><button onClick={handleToggleClick}>
        {login ? "로그아웃" : "로그인"}
        </button></li>
        <li>{login ? "로그인을 해주세요!" : "환영합니다!"}
        </li>
        </ul>
      </div>
    );
  
}

export default LoginControl;
  
 