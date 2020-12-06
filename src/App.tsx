import { Layout, Menu } from 'antd';
import React from 'react';
import './App.scss';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh', height: '100%' }}>
      <Layout.Sider collapsible>
        <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
            textAlign: 'center',
            lineHeight: '32px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Retinue
        </div>
        <Menu theme="dark" />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Content style={{ padding: '10px' }}>Test</Layout.Content>
      </Layout>
    </Layout>
  );
}
