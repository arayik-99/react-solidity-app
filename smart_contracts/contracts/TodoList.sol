// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract TodoList {
  uint256 public todoCount;

  struct Todo {
    address owner;
    string name;
    bool completed;
  }

  mapping(uint256 => Todo) public todos;

  function getTodoList() public view returns (Todo[] memory) {
    Todo[] memory todoList = new Todo[](todoCount);

    for (uint i = 0; i < todoCount; i++) {
      Todo storage todo = todos[i];
      todoList[i] = todo;
    }

    return todoList;
  }

  function addTodo(string memory name) public {
    todoCount++;
    todos[todoCount] = Todo(msg.sender, name, false);
  }

  function completeTodo(uint256 index) public {
    address todoOwner = todos[index].owner;
    require(msg.sender == todoOwner, "Only the owner can complete the task");
    todos[index].completed = true;
  }
}