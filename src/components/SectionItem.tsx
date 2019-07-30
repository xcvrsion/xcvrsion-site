import React, { FC, CSSProperties } from 'react';
import './SectionItem.css';
import useWindowSize from '@rehooks/window-size';
import Fade from 'react-reveal/Fade';

export interface ISectionItemProps {
  style?: CSSProperties;
}

export const SectionItem: FC<ISectionItemProps> = (props) => {
  const { innerWidth } = useWindowSize();

  const combinedStyles = Object.assign({},
    styles.sectionItem,
    (innerWidth <= 800) && styles.sectionItemMobile,
    props.style,
  );

  return (
    <Fade bottom cascade>
      <div className='SectionItem' style={combinedStyles}>
        {props.children}
      </div>
    </Fade>
  );
};

const styles = {
  sectionItem: {
    padding: '2rem',
  } as CSSProperties,
  sectionItemMobile: {
    padding: '1rem',
  } as CSSProperties,
};