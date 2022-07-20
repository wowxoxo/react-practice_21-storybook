import React from 'react';
import TodoFooter from './components/TodoFooter';
import TodoItem from './components/TodoItem';
// import './App.css';

function App() {
  const todoItems = <TodoItem title="Test todo item" onDestroy={() => {}} />;

  const main = (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        // onChange={this.toggleAll}
        // checked={activeTodoCount === 0}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">{todoItems}</ul>
    </section>
  );

  const footer = <TodoFooter count={10} />;

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          // value={this.state.newTodo}
          // onKeyDown={this.handleNewTodoKeyDown}
          // onChange={this.handleChange}
          autoFocus={true}
        />
      </header>
      {main}
      {footer}
    </div>
  );
}

export default App;
