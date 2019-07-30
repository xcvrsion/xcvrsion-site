import React, { FC, CSSProperties } from 'react';

export interface ISectionProps {
  style?: CSSProperties;
  contentStyle?: CSSProperties;
}

export const Section: FC<ISectionProps> = (props) => {
  const combinedStyle = Object.assign({},
    styles.section,
    props.style,
  );

  const combinedContentStyle = Object.assign({},
    styles.sectionContent,
    props.contentStyle,
  );

  return (
    <div style={combinedStyle}>
      <div style={combinedContentStyle}>
        {props.children}
      </div >
    </div >
  );
};

const styles = {
  section: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  } as CSSProperties,
  sectionContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    maxWidth: '1200px',
    width: '100%',
  } as CSSProperties,
};