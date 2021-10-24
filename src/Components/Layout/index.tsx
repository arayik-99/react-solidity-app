import { useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { Button, Input, notification } from 'antd';
import Card from '../Card';
import { useFetchTodos, useTodoMethod } from '../../Hooks';
import {
  CardContainer,
  Container,
  InputContainer,
  TodoContainer,
} from './styles';

const Layout = () => {
  const [todos, setTodos] = useState<Array<any>>([]);
  const [todoName, setTodoName] = useState<string>('');

  const { account } = useEthers();

  const { result } = useFetchTodos();
  const { send: addTodo } = useTodoMethod('addTodo');
  const { send: completeTodo, state: completedState } =
    useTodoMethod('completeTodo');

  useEffect(() => {
    if (!completedState) return;

    if (completedState.status === 'Exception') {
      notification.open({
        message: completedState.status,
        description: completedState.errorMessage,
      });
    }
  }, [completedState]);

  const handleCreateTodo = async () => {
    await addTodo(todoName);
  };

  const handleCompleteTodo = async (index: number) => {
    await completeTodo(index);
  };

  useEffect(() => {
    if (!result) return;

    const deletableAddress = '0x0000000000000000000000000000000000000000';
    const mappedTodos = result.map((todos: any) => {
      return {
        name: todos['name'],
        owner: todos['owner'],
        completed: todos['completed'],
      };
    });

    const indexOfEmpty = mappedTodos.findIndex(
      (i: any) => i.owner === deletableAddress
    );
    mappedTodos.splice(indexOfEmpty, 1);

    setTodos(mappedTodos);
  }, [result]);

  return (
    <Container>
      {account && (
        <InputContainer>
          <Input
            onChange={(e) => setTodoName(e.target.value)}
            style={{ width: 200 }}
          />
          <Button
            onClick={handleCreateTodo}
            disabled={!todoName}
            type='primary'
          >
            Create Todo
          </Button>
        </InputContainer>
      )}
      <TodoContainer>
        <CardContainer>
          {todos &&
            todos.map((todo, index) => (
              <Card
                key={index}
                completeTodo={handleCompleteTodo}
                index={index + 1}
                name={todo.name}
                owner={todo.owner}
                completed={todo.completed}
              />
            ))}
        </CardContainer>
      </TodoContainer>
    </Container>
  );
};

export default Layout;
