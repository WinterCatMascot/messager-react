import { useState } from 'react'

function App() {
  const handleClick = () => {
    alert('Войти не удалось!');
  };

  // function handleClick() {
  //  alert('Войти не удалось!');
  // }

  return (
    <div>
      <button onClick={handleClick}>
        Login
      </button>
    </div>
  )
}

export default App
