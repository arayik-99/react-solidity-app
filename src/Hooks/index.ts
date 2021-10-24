import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import abiJSON from '../abi/TodoList.json';
import { useContractCall, useContractFunction } from '@usedapp/core';

type TodoMethod = 'addTodo' | 'completeTodo';

const abi = new ethers.utils.Interface(abiJSON.abi);
const address = abiJSON.networks[5777].address;
const contract: any = new Contract(address, abi);

export const useFetchTodos = () => {
  const [result] =
    useContractCall({
      abi,
      address,
      method: 'getTodoList',
      args: [],
    }) ?? [];

  return { result };
};

export const useTodoMethod = (method: TodoMethod) => {
  const { send, state } = useContractFunction(contract, method);
  return { send, state };
};
