import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/index.scss';

import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse staticTop fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-ECharts</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem
                eventKey={2}
                href="//github.com/luqin/react-echarts"
                target="_blank"
              >
                GitHub
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="main" style={{ position: 'absolute', top: '50px' }}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default App;
