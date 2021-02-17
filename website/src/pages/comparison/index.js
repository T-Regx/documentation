import React from 'react';
import Layout from '@theme/Layout';

import ComparisonTable from '../../components/ComparisonTable/index';
import DisqusThread from '../../components/DisqusThread/DisqusThread';
import PregSuperposition from "../../components/PregSuperposition/PregSuperposition";

export default () => <Layout>
  <div className="container margin-vert--xl">
    <div className="text--center1 margin-bottom--xl">
      <h1>Comparison table of plain PHP and T-Regx</h1>
      <p>
        Here's a little table of some of the differences between the behaviour
        of plain PHP <PregSuperposition/> methods and T-Regx API.
      </p>
    </div>
    <ComparisonTable/>
    <DisqusThread title='Questions about T-Regx Comparison' identifier='7eb37bee54d5e7315fd19ebdc4c56cf7'/>
  </div>
</Layout>;
