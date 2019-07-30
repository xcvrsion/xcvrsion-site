import React, { FC } from 'react';
import { Section, SectionItem, Text, Link } from '../components';
import { Colors } from '../resources';
import { FaMailBulk } from 'react-icons/fa';

export const FooterSection: FC = () => {
  return (
    <Section contentStyle={{ gridAutoColumns: '1fr' }}>
      <SectionItem>
        <Text style={{ margin: 0, color: Colors.primary }} p>
          {'© Xcvrsion, Inc.'}
        </Text>
      </SectionItem>
      <SectionItem>
        <Link style={{ margin: 0, color: Colors.primary }} noUnderline href={'mailto:info@xcvrsion.com'} icon={<FaMailBulk color={Colors.primary} style={{ marginLeft: '0.5rem' }} size={18} />}>
          {'info@xcvrsion.com'}
        </Link>
      </SectionItem>
    </Section>
  );
};