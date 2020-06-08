import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Learn</>,
    pageUrl : 'learn',
    imageUrl: '/img/undraw_docusaurus_mountain.svg',
    subheadings : {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : 'learn',
      subheading_2 : 'Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Security & Compliance',
      subheading_3_url : 'learn' },
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Product Guides</>,
    pageUrl : 'productguides',
    imageUrl: '/img/undraw_docusaurus_tree.svg',
    subheadings : {
      subheading_1 : 'Getting Started',
      subheading_1_url : 'learn',
      subheading_2 : 'Configuring Accounts',
      subheading_2_url : 'learn',
      subheading_3 : 'Fund Administration',
      subheading_3_url : 'learn' },
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {

    title: <>Customer Care</>,
    pageUrl : 'customercare',
    imageUrl: '/img/undraw_docusaurus_tree.svg',
    subheadings : {
      subheading_1 : 'Accounts Help',
      subheading_1_url : 'learn',
      subheading_2 : 'Payments Help',
      subheading_2_url : 'learn',
      subheading_3 : 'Contact Us/FAQ',
      subheading_3_url : 'learn' },
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Network Members</>,
    pageUrl : 'networkmembers',
    imageUrl: '/img/undraw_docusaurus_tree.svg',
    subheadings : {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : 'learn',
      subheading_2 : 'Qredo Network Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Qredo Network Concepts',
      subheading_3_url : 'learn' },
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Partners</>,
    pageUrl : 'partners',
    imageUrl: '/img/undraw_docusaurus_tree.svg',
    subheadings : {
    subheading_1 : 'Data Centers',
    subheading_1_url : 'learn',
    subheading_2 : 'Integrators',
    subheading_2_url : 'learn',
    subheading_3 : 'Partner APIs',
    subheading_3_url : 'learn' },
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  
  {
    title: <>Deployment Guides</>,
    pageUrl : 'deploymentguides',
    imageUrl: '/img/undraw_docusaurus_react.svg',
    subheadings :  {
      subheading_1 : 'Qredo Network Concepts',
      subheading_1_url : 'learn',
      subheading_2 : 'Qredo Network Concepts',
      subheading_2_url : 'learn',
      subheading_3 : 'Qredo Network Concepts',
      subheading_3_url : 'learn' },
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description,pageUrl,subheadings}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={useBaseUrl('/categories/'+pageUrl)} > <img className={styles.featureImage} src={imgUrl} alt={title}  /> </Link>
        </div>
      )}
      <Link to={useBaseUrl('/categories/'+pageUrl)} > <h3 >{title} </h3> </Link>
      <p>{description}</p>
      <Link> <p> {subheadings.subheading_1} </p></Link>
      <Link> <p> {subheadings.subheading_2} </p></Link>
      <Link> <p> {subheadings.subheading_3} </p></Link>
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
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 style={{color: "white"}} className="hero__title">{siteConfig.title}</h1>
          <p style={{color: "white"}} className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
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
      </main>
    </Layout>
  );
}

export default Home;
