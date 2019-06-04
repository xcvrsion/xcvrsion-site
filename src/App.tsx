import React, { FunctionComponent, CSSProperties } from 'react';
import { Strings } from './resources';
import { Text, Link, Block } from './components';

const App: FunctionComponent = () => {
  return (
    <Block center style={styles.app}>
      <Text title>
        {Strings.title}
      </Text>
      <Text>
        {Strings.subtitle}
      </Text>
      <Link href={`mailto:${Strings.email}`}>
        {Strings.email}
      </Link>
    </Block>
  );
}

const styles = {
  app: {
    width: '100%',
    height: '100vh',
  } as CSSProperties,
};

export default App;