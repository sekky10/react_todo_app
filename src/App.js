import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Table } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvoider from './contexts/TodoContext';

function App() {

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodosContextProvoider>
        <TodoForm />
        <TodoList />
        </TodosContextProvoider>
      </Container>
    </div>
  );
}

export default App;
