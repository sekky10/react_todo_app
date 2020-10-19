import React, {useState, useContext} from 'react'
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { TodosContext } from '../contexts/TodoContext';

function TodoForm() {
  const { addTodo } = useContext(TodosContext)
  const [value, setVaule] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setVaule('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input type="text"
          value={value}
          onChange={e => setVaule(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">追加</Button>
        </InputGroupAddon>  
      </InputGroup>
    </Form>
  )
}

export default TodoForm