import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Anh T. Tra</h1>
              <div className="box">
                <div className="box-sm red"></div>
                <div className="box-sm orange"></div>
                <div className="box-sm yellow "></div>
                <div className="box-sm green "></div>
                <div className="box-sm blue "></div>
                <div className="box-sm purple"></div>
              </div>

              <p> AI Researcher - Data Engineer - Coder - Speaker - Writer</p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/anhttra/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/trunganh0111" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/anhttra" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;