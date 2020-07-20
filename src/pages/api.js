import React, { Suspense, lazy } from "react";
import Layout from "@theme/Layout";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let RedocStandalone = () => <div></div>;
if (ExecutionEnvironment.canUseDOM) {
  RedocStandalone = require("redoc").RedocStandalone;
}

function Hello() {
  return (
    <Layout title="Hello">
      <RedocStandalone specUrl="/swagger.yaml" />
    </Layout>
  );
}

export default Hello;
