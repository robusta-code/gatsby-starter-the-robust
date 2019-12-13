import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function() {
  return (
    <Layout>
      <section>
        <p>Welcome to Gatsby the Robust</p>

        <p>
          Here is the famous <Link to="/blog">Blog Roll</Link>
        </p>
      </section>
    </Layout>
  );
}
