import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="about-grid">
          <Cell col={12}>
            <div className="about-text">
              <p>Comming soon ...</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default AboutPage;