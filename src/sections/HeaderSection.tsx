import React, { FC } from 'react';
import { Section, SectionItem, Link } from '../components';
import { Images } from '../resources';

export const HeaderSection: FC = () => {
  return (
    <Section>
      <SectionItem style={{ display: 'unset', marginLeft: -12 }}>
        <Link style={{ fontSize: '1.5rem' }} noUnderline href={'https://xcvrsion.com'}>
          <img src={Images.xcvrsionLogo} width={180} />
        </Link>
      </SectionItem>
    </Section>
  );
};