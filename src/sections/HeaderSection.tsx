import React, { FC } from 'react';
import { Section, SectionItem, Link } from '../components';

export const HeaderSection: FC = () => {
  return (
    <Section>
      <SectionItem style={{ display: 'flex' }}>
        <Link noUnderline href={'https://xcvrsion.com'} style={{ fontWeight: 700 }}>
          {'Xcvrsion'}
        </Link>
      </SectionItem>
    </Section>
  );
};