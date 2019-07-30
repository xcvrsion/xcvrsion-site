import React, { FC } from 'react';
import { Section, SectionItem, Link } from '../components';

export const HeaderSection: FC = () => {
  return (
    <Section>
      <SectionItem style={{ display: 'unset' }}>
        <Link style={{ fontSize: '1.5rem' }} noUnderline href={'https://xcvrsion.com'}>
          {'Xcvrsion'}
        </Link>
      </SectionItem>
    </Section>
  );
};