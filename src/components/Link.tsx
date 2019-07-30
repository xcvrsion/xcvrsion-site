import React, { FC, CSSProperties } from 'react';
import { Colors } from '../resources';

export interface ILinkProps {
  style?: CSSProperties;
  href?: string;
  noUnderline?: boolean;
}

export const Link: FC<ILinkProps> = (props) => {
  const combinedStyle = Object.assign({},
    styles.link,
    props.noUnderline && styles.noUnderline,
    props.style,
  );

  return (
    <a style={combinedStyle} href={props.href}>
      {props.children}
    </a>
  );
};

const styles = {
  link: {
    color: Colors.accent,
  } as CSSProperties,
  noUnderline: {
    textDecoration: 'none',
  } as CSSProperties,
}