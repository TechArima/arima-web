/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Issue the Certificate in a minute',
    title: 'Issue the Certificaet in a minute',
    text:
      'customize your certificate and issue with your logo in a minute.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'White Labelling',
    title: 'White Labelling',
    text:
      'You can completely whitelable this product with your own organization and with your own verification dashboard.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Verifiable in Blockchain',
    title: 'Verifiable in Blockchain',
    text:
      'Verify your certificate or document with IPFS and Blockchain.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Provides Unlimited Certficiate',
    title: 'Provides Unlimted Certfication',
    text:
      'You can issue unlimited certificate by using our arima.io gateway.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Customer Benefits"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
