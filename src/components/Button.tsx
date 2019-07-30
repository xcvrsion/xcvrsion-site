import React, { FC, CSSProperties } from 'react';
import { Colors } from '../resources';
import { Text } from './Text';
import useWindowSize from '@rehooks/window-size';
import './Button.css';

export interface IButtonProps {
  href?: string;
  title?: string;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
}

export const Button: FC<IButtonProps> = (props) => {
  const { innerWidth } = useWindowSize();

  const combinedStyle = Object.assign({},
    styles.button,
    props.style,
  );

  const combinedTitleStyle = Object.assign({},
    styles.title,
    (innerWidth <= 450) && styles.titleMobile,
    props.titleStyle,
  );

  return (
    <div className={'Button'} style={combinedStyle}>
      {props.children}
      <Text style={combinedTitleStyle}>
        {props.title}
      </Text>
    </div>
  );
};

const styles = {
  title: {
    color: Colors.white,
    userSelect: 'none',
    fontSize: '0.7rem',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
  } as CSSProperties,
  titleMobile: {
    fontSize: '1rem',
  } as CSSProperties,
  button: {
    color: Colors.white,
    backgroundColor: Colors.accent,
    padding: '0.5rem 0.25rem 0.5rem 0.25rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
};