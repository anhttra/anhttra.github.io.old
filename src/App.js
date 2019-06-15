import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="    " scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Navigation>
        </Header>
        <Drawer title="  ">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

  );
}

export default App;
