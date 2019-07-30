import React, { FC } from 'react';
import { Section, SectionItem, Text, Link } from '../components';
import { Colors } from '../resources';

export const FooterSection: FC = () => {
  return (
    <Section>
      <SectionItem>
        <Text p >
          {'© Xcvrsion, Inc.'}
        </Text>
      </SectionItem>
      <SectionItem>
        <Link style={{ color: Colors.darkGray, textAlign: 'right', }} noUnderline href={'mailto:info@xcvrsion.com'}>
          {'info@xcvrsion.com'}
        </Link>
      </SectionItem>
    </Section>
  );
};