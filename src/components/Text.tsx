import React, { FC, CSSProperties } from 'react';
import { Colors } from '../resources';

export interface ITextProps {
  style?: CSSProperties;
  h1?: boolean;
  h2?: boolean;
  p?: boolean;
  center?: boolean;
}

export const Text: FC<ITextProps> = (props) => {
  const combinedStyles = Object.assign({},
    styles.text,
    props.h1 && styles.h1,
    props.h2 && styles.h2,
    props.p && styles.p,
    props.center && styles.center,
    props.style,
  );

  if (props.h1) {
    return (
      <h1 style={combinedStyles}>
        {props.children}
      </h1>
    );
  }

  if (props.h2) {
    return (
      <h2 style={combinedStyles}>
        {props.children}
      </h2>
    );
  }

  if (props.p) {
    return (
      <p style={combinedStyles}>
        {props.children}
      </p>
    );
  }

  return (
    <div style={combinedStyles}>
      {props.children}
    </div>
  );
};

const styles = {
  text: {
    color: Colors.darkGray,
  } as CSSProperties,
  h1: {
    color: Colors.primary,
  } as CSSProperties,
  h2: {
    color: Colors.primary,
    fontWeight: 300,
  } as CSSProperties,
  p: {
    // N/A
  } as CSSProperties,
  center: {
    textAlign: 'center',
  } as CSSProperties,
};