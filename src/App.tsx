import data from '@retinue/databank/data.json';
import { Layout, Menu } from 'antd';
import React from 'react';
import './App.scss';

export default function App() {
  console.log(data);
  return (
    <Layout style={{ minHeight: '100vh', height: '100%' }}>
      <Layout.Sider collapsible>
        <Menu theme="dark" />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Content style={{ padding: '10px' }}>Test</Layout.Content>
      </Layout>
    </Layout>
  );
}
