import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Learns</>,
    pageUrl : 'learn',
    imageUrl: '/img/homepage/learn.svg',
    subheadings : {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : '/learn/qredo-network-concepts',
      subheading_2 : 'Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Security & Compliance',
      subheading_3_url : 'learn' },
  },
  {
    title: <>Product Guides</>,
    pageUrl : 'productguides',
    imageUrl: '/img/homepage/product-guides.svg',
    subheadings : {
      subheading_1 : 'Getting Started',
      subheading_1_url : 'learn',
      subheading_2 : 'Configuring Accounts',
      subheading_2_url : 'learn',
      subheading_3 : 'Fund Administration',
      subheading_3_url : 'learn' },
  },
  {

    title: <>Customer Care</>,
    pageUrl : 'customercare',
    imageUrl: '/img/homepage/customer-care.svg',
    subheadings : {
      subheading_1 : 'Accounts Help',
      subheading_1_url : 'learn',
      subheading_2 : 'Payments Help',
      subheading_2_url : 'learn',
      subheading_3 : 'Contact Us/FAQ',
      subheading_3_url : 'learn' },
  },
  {
    title: <>Network Members</>,
    pageUrl : 'networkmembers',
    imageUrl: '/img/homepage/network-members.svg',
    subheadings : {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : 'learn',
      subheading_2 : 'Qredo Network Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Qredo Network Concepts',
      subheading_3_url : 'learn' },
  },
  {
    title: <>Partners</>,
    pageUrl : 'partners',
    imageUrl: '/img/homepage/partners.svg',
    subheadings : {
    subheading_1 : 'Data Centers',
    subheading_1_url : 'learn',
    subheading_2 : 'Integrators',
    subheading_2_url : 'learn',
    subheading_3 : 'Partner APIs',
    subheading_3_url : 'learn' },
  },

  {
    title: <>Deployment Guides</>,
    pageUrl : 'deploymentguides',
    imageUrl: '/img/homepage/deployment-guides.svg',
    subheadings :  {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : 'learn',
      subheading_2 : 'Qredo Network Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Qredo Network Concepts',
      subheading_3_url : 'learn' },
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
        <Link to={useBaseUrl('/categories/'+pageUrl)} className={styles.titleLink}><h3 className={styles.title}>{title}</h3></Link>
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
            <h1 className={styles.heroTitle}>How can we help you?</h1>
            <p className={styles.heroSubtitle}>Discover how secure and fast movement of digital assets works</p>
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
              <li><Link>Release Notes: April 2020</Link></li>
              <li><Link>Release Notes</Link></li>
              <li><Link>Release Notes</Link></li>
            </ul>
          </div>

          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <h2 className={styles.contactTitle}>Contact our support team</h2>

              <p className={styles.contactFaq}>Frequently asked questions</p>

              <a href="mailto:support@qredo.com" className={styles.contactEmail}>support@qredo.com</a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
