import React from 'react';
import Layout from '@theme/Layout';

function CustomerCare() {
  return (
    <Layout title="CustomerCare">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          This is a custom <code> CustomerCare page</code> .
        </p>
      </div>
    </Layout>
  );
}

export default CustomerCare;