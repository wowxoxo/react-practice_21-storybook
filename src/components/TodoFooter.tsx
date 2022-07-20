import classNames from 'classnames';
import React from 'react';
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from '../constants';

interface TodoFooterProps {
  count: number;
  nowShowing?: any; // TODO
}

const TodoFooter: React.FC<TodoFooterProps> = ({ count, nowShowing }) => {
  let clearButton;
  clearButton = (
    <button
      className="clear-completed"
      // onClick={this.props.onClearCompleted}
    >
      Clear completed
    </button>
  );

  return (
    <footer className="footer">
      <span className="todo-count">
        {/* <strong>{this.props.count}</strong> {activeTodoWord} left */}
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={classNames({ selected: nowShowing === ALL_TODOS })}
          >
            All
          </a>
        </li>{' '}
        <li>
          <a
            href="#/active"
            className={classNames({ selected: nowShowing === ACTIVE_TODOS })}
          >
            Active
          </a>
        </li>{' '}
        <li>
          <a
            href="#/completed"
            className={classNames({ selected: nowShowing === COMPLETED_TODOS })}
          >
            Completed
          </a>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
};

export default TodoFooter;
