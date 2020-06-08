import React from 'react';
import Layout from '@theme/Layout';

function Learn() {
  return (
    <Layout title="Learn">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          This is a custom <code> Learn page</code> .
        </p>
      </div>
    </Layout>
  );
}

export default Learn;