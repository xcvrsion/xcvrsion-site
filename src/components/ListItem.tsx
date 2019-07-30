import React, { FC, CSSProperties } from 'react';

export interface IListItemProps {
  style?: CSSProperties;
  icon: any;
}

export const ListItem: FC<IListItemProps> = (props) => {
  const combinedStyle = Object.assign({},
    styles.listItem,
    props.style,
  );

  return (
    <div style={combinedStyle}>
      {props.icon}
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