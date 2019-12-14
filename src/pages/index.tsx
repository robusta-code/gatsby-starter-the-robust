import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function() {
  return (
    <Layout>
      <section>
        <p>Welcome to Gatsby the Robust</p>

        <p>
          Here is the <Link to="/blog">curated Blog Roll</Link> listing some
          wonderful code project written in Toulouse, France
        </p>

        <p>
          Toulouse is mostly known for being home of Airbus and its Chocolatine
          pastry, but hold also some awesome tech folks, full of creativity
        </p>

        <p>This will be shown to you, with Gatsby the Robust in action</p>
      </section>
    </Layout>
  );
}
