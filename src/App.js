import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Row, Col } from "reactstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Create from "./Create";
import CreateResult from "./CreateResult";
import DisplaySecret from "./DisplaySecret";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Secret Share</NavbarBrand>
          </Navbar>
          <div>
            <Container className="margin">
              <Row>
                <Col ml="auto">
                  <Route exact path="/" component={Create} />
                  <Route exact path="/result" component={CreateResult} />
                  <Route
                    exact
                    path="/s/:key/:password"
                    component={DisplaySecret}
                  />
                  <Route exact path="/s/:key" component={DisplaySecret} />
                </Col>
              </Row>
            </Container>
            <Container className="features">
              <hr />
              <p className="lead">
                You can use this website to securely share secrets such as passwords.
              </p>
              <p />
              <h6>End-to-End encryption</h6>
              <p>
                Both encryption and decryption are completed locally in the
                browser, the decryption key is not stored.
              </p>
              <h6>Self destruction</h6>
              <p>
                All messages have a fixed expiry and will be deleted
                automatically after expiration.
              </p>
              <h6>Single Use</h6>
              <p>
                Once the link is clicked, the data is permanently removed from the server
              </p>
              <h6>No accounts needed</h6>
              <p>
                No additional information except the encrypted secret is stored
                in the database.
              </p>
            </Container>
          </div>
          <Container className="text-center">
            <div className="text-muted small">
              <a href="https://home.internetbydesign.nz">Internet by Design</a>
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
