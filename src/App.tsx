import { UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import Lists from './views/Lists';

function Nav() {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    setSelected(
      [location.pathname.startsWith('/lists') ? 'lists' : ''].filter((i) => i),
    );
  }, [location]);
  function navigateIfNewLink(path: string) {
    if (location.pathname !== path) {
      history.push(path);
    }
  }
  return (
    <Menu theme="dark" selectedKeys={selected}>
      <Menu.Item
        icon={<UnorderedListOutlined />}
        key="lists"
        onClick={() => navigateIfNewLink('/lists')}
      >
        List Builder
      </Menu.Item>
    </Menu>
  );
}

function Logo() {
  const history = useHistory();
  return (
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
      onClick={() => {
        if (history.location.pathname !== '/') {
          history.push('/');
        }
      }}
    >
      R
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', height: '100%' }}>
        <Layout.Sider breakpoint="lg">
          <Logo />
          <Nav />
        </Layout.Sider>
        <Layout className="site-layout">
          <Layout.Content style={{ padding: '15px 10px' }}>
            <Switch>
              <Route exact path="/">
                Home
              </Route>
              <Route exact path="/lists">
                <Lists />
              </Route>
              <Route exact path="/lists/new">
                Test
              </Route>
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
}
