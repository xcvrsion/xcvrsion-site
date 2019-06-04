import React, { FunctionComponent, CSSProperties } from "react";

export interface IBlockProps {
  center?: boolean;
  style?: CSSProperties;
}

export const Block: FunctionComponent<IBlockProps> = (props) => {
  const blockStyle = Object.assign({},
    styles.block,
    props.center && styles.center,
    props.style,
  );

  return (
    <div style={blockStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  block: {
  } as CSSProperties,
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
};