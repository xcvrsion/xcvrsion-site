import React, { FunctionComponent, CSSProperties } from 'react';
import { Strings } from './resources';
import { Text, Link } from './components';

const App: FunctionComponent = () => {
  return (
    <div style={styles.app}>
      <Text title>
        {Strings.title}
      </Text>
      <Text>{Strings.subtitle}</Text>
      <Link href={`mailto:${Strings.email}`}>
        {Strings.email}
      </Link>
    </div>
  );
}

const styles = {
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as CSSProperties,
};

export default App;