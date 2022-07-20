import classNames from 'classnames';
import React from 'react';

interface TodoItemProps {
  title: string;
  onDestroy: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, onDestroy }) => {
  const handleEdit = () => {};

  return (
    <li
      className={classNames({
        // completed: this.props.todo.completed,
        // editing: this.props.editing
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          // checked={this.props.todo.completed}
          // onChange={this.props.onToggle}
        />
        <label onDoubleClick={handleEdit}>{title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        // ref="editField"
        className="edit"
        // value={this.state.editText}
        // onBlur={this.handleSubmit}
        // onChange={this.handleChange}
        // onKeyDown={this.handleKeyDown}
      />
    </li>
  );
};

export default TodoItem;
