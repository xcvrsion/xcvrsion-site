import React, { FC } from 'react';
import { Section, SectionItem, ListItem, Text, Button, AppDemo } from './components';
import { FaVrCardboard, FaHandsHelping, FaGooglePlay, FaApple } from 'react-icons/fa';
import './App.css';
import { Colors } from './resources';
import { Link } from './components/Link';

const App: FC = () => {
  return (
    <div className={'App'}>
      <Section>
        <SectionItem>
          <Link noUnderline href={'https://xcvrsion.com'} style={{ fontWeight: 700 }}>
            {'Xcvrsion'}
          </Link>
        </SectionItem>
      </Section>

      <Section className={'IntroSection'}>
        <SectionItem style={{ gridTemplateRows: '0fr 0fr 0fr' }}>
          <Text h1>
            {'Tour like never before, quicker than ever.'}
          </Text>
          <Text p>
            {'Take a virtual trip to your favorite university, a home of interest, or the latest concert.'}
          </Text>
          <div style={{ width: '100%', display: 'grid', gridGap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <Button title={'Get it on the App Store'} href=''>
              <FaApple size={18} />
            </Button>
            <Button title={'Get it on the Play Store'} href=''>
              <FaGooglePlay size={18} />
            </Button>
          </div>
        </SectionItem>
        <SectionItem>
          <AppDemo />
        </SectionItem>
      </Section>

      <Section>
        <SectionItem>
          <Text h1 center>
            {'Let\'s talk business.'}
          </Text>
        </SectionItem>
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
    </div>
  );
}

export default App;