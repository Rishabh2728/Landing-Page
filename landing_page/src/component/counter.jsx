import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="counter">
      <h2>Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </div>
    </section>
  )
}

export default Counter
