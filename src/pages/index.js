import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Overview</>,
    pageUrl: 'Qredo%20Network',
    imageUrl: '/img/homepage/learn.svg',
    subheadings : {
      subheading_1 : 'Qredo Network',
      subheading_1_url: '/docs/Qredo%20Network',
      subheading_2 : 'Security & Cryptography',
      subheading_2_url: 'docs/Security%20&%20Cryptography',
      subheading_3 : 'Regulatory & Compliance',
      subheading_3_url: 'docs/Regulatory%20&%20Compliance' },
  },
  {
    title: <>Product Guides</>,
    pageUrl: 'Qredo%20App%20Overview',
    imageUrl: '/img/homepage/product-guides.svg',
    subheadings : {
      subheading_1 : 'Getting Started',
      subheading_1_url: 'docs/Getting%20Started',
      subheading_2 : 'Configuring Accounts',
      subheading_2_url : 'docs/Configure%20Account',
      subheading_3 : 'Fund Administration',
      subheading_3_url: 'docs/Fund%20Administration' },
  },
  {

    title: <>Customer Care</>,
    pageUrl: 'Account%20Help',
    imageUrl: '/img/homepage/customer-care.svg',
    subheadings : {
      subheading_1 : 'Account Help',
      subheading_1_url: 'docs/Account%20Help',
      subheading_2 : 'Payments Help',
      subheading_2_url: 'docs/Payment%20Help',
      subheading_3 : 'Contact Us/FAQ',
      subheading_3_url: 'docs/Contact%20Us' },
  },
  {
    title: <>Network Members</>,
    pageUrl: 'Financial%20Institutions',
    imageUrl: '/img/homepage/network-members.svg',
    subheadings : {
      subheading_1 : 'Exchanges',
      subheading_1_url: 'docs/Exchanges',
      subheading_2 : 'Custodians',
      subheading_2_url : 'docs/Custodians',
      subheading_3 : 'Traders',
      subheading_3_url : 'docs/Traders' },
  },
  {
    title: <>Partners</>,
    pageUrl: 'Systems%20Integrators',
    imageUrl: '/img/homepage/partners.svg',
    subheadings : {
    subheading_1 : 'Systems Integrators',
      subheading_1_url: 'docs/Systems%20Integrators',
    subheading_2 : 'EMS & OMS ISVs',
      subheading_2_url: 'docs/EMS%20&%20OMS%20ISVs',
    subheading_3 : 'Partner APIs',
      subheading_3_url: 'docs/Partner%20API' },
  },

  {
    title: <>Deployment Guides</>,
    pageUrl: 'Custodian%20App',
    imageUrl: '/img/homepage/deployment-guides.svg',
    subheadings :  {
      subheading_1 : 'Custodian App',
      subheading_1_url: 'docs/Custodian%20App',
      subheading_2 : 'Custodian Server',
      subheading_2_url: 'docs/Custodian%20Server',
      subheading_3 : 'Qredo Validators',
      subheading_3_url: 'docs/Qredo%20Validators' },
  },
];

function Feature({imageUrl, title, description,pageUrl,subheadings}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4')}>
      <div className={styles.feature}>
        {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={title}  />
        )}
        <Link to={useBaseUrl('/docs/'+pageUrl)} className={styles.titleLink}><h3 className={styles.title}>{title}</h3></Link>
        <div className={styles.links}>
          <Link href={subheadings.subheading_1_url} className={styles.listLink}> {subheadings.subheading_1} </Link>
          <Link href={subheadings.subheading_2_url} className={styles.listLink}> {subheadings.subheading_2} </Link>
          <Link href={subheadings.subheading_3_url} className={styles.listLink}> {subheadings.subheading_3} </Link>
          <span className={classnames(styles.listLink, styles.listLinkLearnMore)}> learn more </span>
        </div>
      </div>
  </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Qredo Customer Center">
      <div className={styles.landingPageBackground}>
        <header className={classnames('hero', styles.heroBanner)}>
          <div className="container">
            <h1 className={styles.heroTitle}>Help Center</h1>
            <p className={styles.heroSubtitle}>Qredo is a DeFi platform for secure and fast movment of digital assets.</p>
          </div>
        </header>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
          <div className={styles.banner}>
            <h2 className={styles.bannerTitle}>What's new</h2>
            <ul className={styles.bannerList}>
              <li><Link>Release Notes: Version 1</Link></li>
              <li><Link></Link></li>
              <li><Link></Link></li>
            </ul>
          </div>

          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <h2 className={styles.contactTitle}>Contact our support team</h2>

              <p className={styles.contactFaq}></p>

              <a href="mailto:support@qredo.com" className={styles.contactEmail}>support@qredo.com</a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
