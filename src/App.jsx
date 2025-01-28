import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper clear'>
      <header>
      <div className='headerLeft'>
        <img src="/logo.svg" alt="" />
          <div className='headerInfo'>
            <h3 className='text-uppercase'>REACT SNEAKERS</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
      </div>
          <div>
            <ul className='headerRight'>
              <li className='list'>
          <img width={18} height={18} src="/cart.svg" alt="" />
          <span className='labelOfIcon'>1205 pln</span>
          </li>
              <li className='list'>
                <img width={18} height={18} src="/profile.svg" alt="" />
                <span className='labelOfIcon'>Профиль</span>

              </li>
            </ul>
          </div>
      </header>
      <div className="content">
        <h1 className='mb-40'>Все кроссовки</h1>

        <div className="sneakers">

        <div className="card">
          <img width={133} height={112} src="/sneakers/1.jpg" alt="Nike" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>350 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/sneakers/2.jpg" alt="Nike" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>350 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/sneakers/3.jpg" alt="Nike" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>350 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        
        <div className="card">
          <img width={133} height={112} src="/sneakers/4.jpg" alt="Nike" />
          <h5>
          Мужские Кроссовки Nike Blazer Mid Suede
          </h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>350 pln</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default App
