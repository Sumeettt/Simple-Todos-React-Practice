// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteItem} = props

  const onDelete = () => {
    console.log('delete.....')
    onDeleteItem(eachTodo.id)
  }

  return (
    <li className="each-todo-container">
      <p className="todo-text">{eachTodo.title}</p>
      <button onClick={onDelete} type="button" className="delete-button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
