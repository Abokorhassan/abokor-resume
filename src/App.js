import React from "react";
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faAt,
  faMapMarkerAlt,
  faLink,
  faFutbol,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header";
import Main from "./components/main";

// Adding all icons you're using throught the app
library.add(faPhone, faAt, faMapMarkerAlt, faLink, faFutbol, faGamepad);

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page-container">
          <Container>
            <Header />
            <Main />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
