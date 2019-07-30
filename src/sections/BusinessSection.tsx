import React, { FC } from 'react';
import { Section, SectionItem, Text, ListItem } from '../components';
import { FaVrCardboard, FaHandsHelping } from 'react-icons/fa';
import { Colors } from '../resources';

export const BusinessSection: FC = () => {
  return (
    <div>
      <Section>
        <Text h1 center>
          {'Let\'s talk business.'}
        </Text>
      </Section>
      <Section>
        <SectionItem style={{ gridTemplateRows: '0fr 0fr 0fr' }}>
          <div style={{ gridGap: '1rem', width: '100%', display: 'grid', gridTemplateColumns: '0fr auto', alignItems: 'center' }}>
            <div style={{ backgroundColor: Colors.accent, width: 32, height: 32, padding: '16px', borderRadius: '100%' }}>
              <FaVrCardboard color={Colors.lightGray} size={32} />
            </div>
            <Text h2>
              {'Share your world.'}
            </Text>
          </div>
          <div>
            <ListItem>
              <Text p>
                {'We provide the headsets, content, and labor to make things happen.'}
              </Text>
            </ListItem>
            <ListItem>
              <Text p>
                {'We make sure that everyone is able to join in on the experiences you desire.'}
              </Text>
            </ListItem>
          </div>
        </SectionItem>
        <SectionItem style={{ gridTemplateRows: '0fr 0fr 0fr' }}>
          <div style={{ gridGap: '1rem', width: '100%', display: 'grid', gridTemplateColumns: '0fr auto', alignItems: 'center' }}>
            <div style={{ backgroundColor: Colors.accent2, width: 32, height: 32, padding: '16px', borderRadius: '100%' }}>
              <FaHandsHelping color={Colors.lightGray} size={32} />
            </div>
            <Text h2>
              {'We are on your team.'}
            </Text>
          </div>
          <Text p>
            {'Whether you are a university, real estate agency, music company, or another organization, we are here to help.'}
          </Text>
        </SectionItem>
      </Section>
    </div>
  );
};