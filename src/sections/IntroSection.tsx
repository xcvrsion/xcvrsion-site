import React, { FC } from 'react';
import { Section, SectionItem, Button, Text, AppDemo } from '../components';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './IntroSection.css';

export const IntroSection: FC = () => {
  return (
    <div className={'IntroSection'}>
      <Section>
        <SectionItem style={{ gridTemplateRows: '0fr 0fr 0fr' }}>
          <Text h1>
            {'Tour like never before, easier than ever.'}
          </Text>
          <Text p>
            {'Go on a virtual tour of your favorite university, a home of interest, or the latest event.'}
          </Text>
          <div style={{ width: '100%', display: 'grid', gridGap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
            <Button title={'Download from App Store'} href=''>
              <FaApple size={18} />
            </Button>
            <Button title={'Download from Play Store'} href=''>
              <FaGooglePlay size={18} />
            </Button>
          </div>
        </SectionItem>
        <SectionItem>
          <AppDemo />
        </SectionItem>
      </Section>
    </div>
  );
};