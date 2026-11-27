import React from 'react';
import Layout from '@theme/Layout';
const issues=[
 ['Integration','Validate grouping with the integration owner (access methods vs use cases); sections are proposed, not agreed.'],
 ['Data Feeds naming','Data Feeds → Market Data → Market Data Feeds repeats terms; verify category labels. Historical delivery is not always a feed.'],
 ['Data Model / Market Events','Preserve the two full technical topic titles: dxFeed API Market Events and QD Model of Market Events. Confirm the location of Event-Based Instruments and original Order Book child topics.'],
 ['Reference Data','Check whether IPF, spread instruments, event-based instruments and exchange codes should remain grouped under Reference Data.'],
 ['Market Tools / dxScript','Check Market Search versus Market Tools. Old dxScript is a separate language still used by Options Scanner and Unusual Options Screener; do not delete it. Confirm the placement of the newer dxScript.'],
 ['API','Check whether Market Data API is being renamed; map all existing SDK, WebSocket/FIX/REST, QDS Tool and tutorial pages before migration.'],
 ['Retail / Visualization','Verify the full existing Retail subtree and check the status of Viewer and Inforider.'],
 ['Support / FAQ','Technical FAQ should include questions and answers only; procedural content belongs under Support. Support is not represented as a separate category in Natasha’s current draft.'],
 ['Release Notes','Decide whether notices can be published immediately and whether this section links to existing Change Notices and GitHub SDK releases.'],
 ['Migration','Create an old-to-new URL map and redirects before publishing.']
];
export default function Review(){return <Layout title="Structure review" description="Discussion topics"><main className="container" style={{maxWidth:1000,padding:'44px 20px 70px'}}><div className="kbEyebrow">Internal working notes</div><h1>Structure review</h1><p>These are open discussion points, not accepted changes. The sidebar retains the proposed structure from Confluence.</p><table className="reviewTable"><thead><tr><th>Area</th><th>Discussion point</th></tr></thead><tbody>{issues.map(x=><tr key={x[0]}><td><strong>{x[0]}</strong></td><td>{x[1]}</td></tr>)}</tbody></table></main></Layout>}
