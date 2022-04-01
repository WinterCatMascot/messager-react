import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0) // state позволяет отображать изменения состояния (почти переменной) в браузере
        // деструктуризация, мы взяли нулевой и первый элемент из массива, count хранит значение, setCount - функция, позв менять значение count
    const handleClick = () => {
    alert('Войти не удалось!');
  };
    function handlePlus() {
        setCount(count+1)
    }
    function handleMinus() {
        setCount(count-1)
    }

  // function handleClick() {
  //  alert('Войти не удалось!');
  // }

  return (
    <div>
        <p>{count}</p>
        {/*фигурные скобки - вставки js (переменная в данный момент = 0)*/}
      <button onClick={handleClick}>
        login
      </button>
        <button onClick={handlePlus}>
            +1
        </button>
        <button onClick={handleMinus}>
            -1
        </button>
    </div>
  )
}

export default App
