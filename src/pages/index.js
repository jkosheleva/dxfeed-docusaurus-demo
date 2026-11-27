import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
const cards=[
 ['Getting Started','Integration paths, authentication, and quickstarts.','/docs/about/getting-started'],
 ['Data Feeds','Real-time, historical, aggregated, and composite data.','/docs/products/data-feeds'],
 ['Data Model','Events, IPF, symbology, and technical concepts.','/docs/products/data-model'],
 ['API','dxFeed API and dxLink documentation.','/docs/products/api'],
 ['Market Tools','Options Scanner, alerts, unusual options, and dxScript.','/docs/products/market-tools'],
 ['Visualization','dxFeed Viewer, Inforider, dxAnalytics.','/docs/products/data-visualization-tools'],
 ['Retail','Retail eShop and Retail Services.','/docs/products/dxfeed-retail'],
 ['FAQ','Data and technical questions.','/docs/faq'],
 ['Glossary','Reference terms and definitions.','/docs/glossary'],
 ['Release Notes','Change notices and SDK releases.','/docs/release-notes']];
export default function Home(){return <Layout title="Documentation" description="dxFeed KB Docusaurus navigation prototype"><header className="heroKB"><div className="container"><div className="kbTag">dxFeed / Documentation</div><h1>Find the data. Build your integration.</h1><p>Explore the proposed Knowledge Base structure in Docusaurus. Article pages are intentionally placeholders so we can review navigation before migration.</p><Link className="button button--primary button--lg" to="/docs/about/getting-started">Explore documentation</Link></div></header><main className="container" style={{paddingTop:42,paddingBottom:60}}><div className="kbEyebrow">Browse documentation</div><h2>Explore by topic</h2><section className="kbCards">{cards.map(c=><Link className="kbCard" to={c[2]} key={c[0]}><strong>{c[0]} ↗</strong><small>{c[1]}</small></Link>)}</section><div className="kbNote"><strong>Structure review</strong><p style={{marginBottom:8}}>This is a working navigation prototype based on Natasha’s draft. Unresolved structure and naming questions are collected separately.</p><Link to="/review">Open review notes →</Link></div></main></Layout>}
