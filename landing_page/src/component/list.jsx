import { useState } from 'react'

function List() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    setItems((prev) => [...prev, { id: Date.now(), text: value }])
    setText('')
  }

  const handleDelete = (idToDelete) => {
    setItems((prev) => prev.filter((item) => item.id !== idToDelete))
  }

  return (
    <section className="list">
      <h2>List</h2>
      <form className="list-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="list-items">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <div>{item.text}</div>
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
