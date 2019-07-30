import React, { FC, CSSProperties } from 'react';
import { FaCheck } from 'react-icons/fa';
import './ListItem.css';
import { Colors } from '../resources';

export interface IListItemProps {
  style?: CSSProperties;
}

export const ListItem: FC<IListItemProps> = (props) => {
  return (
    <div className={'ListItem'} style={props.style}>
      <FaCheck size={18} color={Colors.accent} />
      {props.children}
    </div >
  );
};