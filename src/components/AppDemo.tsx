import React, { FC, CSSProperties } from 'react';
import { Images } from '../resources';

export const AppDemo: FC = (props) => {
  return (
    <div style={styles.appDemo}>
      <img src={Images.phone} style={styles.phone} alt={'phone'} />
      <img src={Images.xcvrsionAppMain} style={styles.app} alt={'app-demo'} />
    </div>
  );
};

const styles = {
  appDemo: {
    position: 'relative',
  } as CSSProperties,
  phone: {
    width: '100%',
  } as CSSProperties,
  app: {
    position: 'absolute',
    top: '8.452250274%',
    left: '15.166340509%',
    width: '68.395303327%',
  } as CSSProperties,
};