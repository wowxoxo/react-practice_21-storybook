import React from 'react';

interface ListItemProps {
  title: string;
}

const ListItem: React.FC<ListItemProps> = ({ title = 'list item' }) => {
  return <li>{title}</li>;
};

export default ListItem;
