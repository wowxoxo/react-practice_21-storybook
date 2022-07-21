import React from 'react';

interface ListProps {
  /**
   * ddsd
   */
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <ul>
      {Array.isArray(children) &&
        children.map((child, i) => {
          return child;
        })}

      {!Array.isArray(children) && children}
    </ul>
  );
};

export default List;
