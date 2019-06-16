import React from 'react';
import './App.css';
import { 
  Layout, Header, Navigation, Drawer, Content, Footer, 
  FooterSection, FooterLinkList, FooterDropDownSection 
} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader className="layout-container">
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
        <Content className="content-container">
          <div className="page-content" />
          <Main />
        </Content>

        <Footer className="footer">
            <p> © 2019 | Anh T. Tra </p>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
