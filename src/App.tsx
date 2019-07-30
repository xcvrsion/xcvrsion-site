import React, { FC, CSSProperties } from 'react';
import { IntroSection, BusinessSection, HeaderSection, FooterSection } from './sections';

const App: FC = () => {
  return (
    <div style={styles.app}>
      <HeaderSection />
      <IntroSection />
      <BusinessSection />
      <FooterSection />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  } as CSSProperties,
};

export default App;