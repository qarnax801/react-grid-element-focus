import { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(null);
  const [inside, setInside] = useState(false);

  const handleHover = (index) => {
    setActive(index);
  }

  const cells = [
    {index: 0, title: 'Element ONE'},
    {index: 1, title: 'Element TWO'},
    {index: 2, title: 'Element THREE'},
    {index: 3, title: 'Element FOUR'}
  ];

  return (
    <>
      <h1>Grid element focus</h1>

      {/* The trick here is to keep the behaviour
        inside the container. When you leave the container,
        everything gets back to normal :) */}
      <div
      className='container'
      onMouseOver={() => setInside(true)}
      onMouseOut={() => setInside(false)}
      >
        {cells.map((cell, index) =>
          <div
          key={cell.index}
          onMouseOver={() => {
            handleHover(index);
          }}
          className={`cell ${index === active ? "active" : "notActive"} ${
          inside ? "" : "outOfBounds "
          }`}>
            {cell.title}
          </div>
        )}
      </div>
      <p>
        This feature allows you to focus on an element from
        a grid (or list or anything else) while blurring other elements.
        The trick to get everything back to normal outside of bounds
        is to just detect if the mouse is outside the container.
        <br/>P.S. This can also be used to apply different stylings, not just
        a blur effect.
        Let me know if you have any issues or suggestions for making it better :)
      </p>
    </>
  );
}

export default App;
