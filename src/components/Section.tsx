import React, { FC, CSSProperties } from 'react';
import './Section.css';

export interface ISectionProps {
  style?: CSSProperties;
  contentStyle?: CSSProperties;
  className?: string;
}

export const Section: FC<ISectionProps> = (props) => {
  const combinedClassName = ['Section', props.className].join(' ');

  return (
    <div className={combinedClassName} style={props.style}>
      <div className={'SectionContent'} style={props.contentStyle}>
        {props.children}
      </div >
    </div>
  );
};