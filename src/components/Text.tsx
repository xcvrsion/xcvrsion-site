import React, { FunctionComponent, CSSProperties } from 'react';
import { Sizes, Colors, Fonts } from '../resources';

export interface ITextProps {
  title?: boolean;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  userSelect?: boolean;
  style?: CSSProperties;
}

export const Text: FunctionComponent<ITextProps> = (props) => {
  const textStyle = Object.assign({},
    styles.text,
    props.title && styles.title,
    props.h1 && styles.h1,
    props.h2 && styles.h2,
    props.h3 && styles.h3,
    props.h4 && styles.h4,
    props.h5 && styles.h5,
    props.h6 && styles.h6,
    !props.userSelect && styles.noUserSelect,
    props.bold && styles.bold,
    props.style,
  );

  return (
    <div style={textStyle}>
      {props.children}
    </div>
  );
};

const styles = {
  bold: {
    fontWeight: 700,
  } as CSSProperties,
  text: {
    fontFamily: Fonts.sans,
    fontSize: Sizes.em,
    color: Colors.gray,
    lineHeight: 2,
    fontWeight: 300,
  } as CSSProperties,
  title: {
    color: Colors.black,
    letterSpacing: '2.5vw',
    textIndent: '2.5vw',
    fontSize: '9vw',
    fontWeight: 700,
  } as CSSProperties,
  noUserSelect: {
    userSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    KhtmlUserSelect: 'none',
    WebkitUserSelect: 'none',
  } as CSSProperties,
  h1: {
    fontSize: Sizes.h1,
  } as CSSProperties,
  h2: {
    fontSize: Sizes.h2,
  } as CSSProperties,
  h3: {
    fontSize: Sizes.h3,
  } as CSSProperties,
  h4: {
    fontSize: Sizes.h4,
  } as CSSProperties,
  h5: {
    fontSize: Sizes.h5,
  } as CSSProperties,
  h6: {
    fontSize: Sizes.h6,
  } as CSSProperties,
};