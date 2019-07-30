import React, { FC, CSSProperties } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Colors } from '../resources';

export interface IListItemProps {
  style?: CSSProperties;
}

export const ListItem: FC<IListItemProps> = (props) => {
  const combinedStyle = Object.assign({},
    styles.listItem,
    props.style,
  );

  return (
    <div style={combinedStyle}>
      <FaCheck size={18} color={Colors.accent} />
      {props.children}
    </div >
  );
};

const styles = {
  listItem: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'baseline',
    gridGap: '1rem',
  },
};