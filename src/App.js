import React from "react";
import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faAt,
  faMapMarkerAlt,
  faMapMarker,
  faLink
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header";

// Adding all icons you're using throught the app
library.add(faPhone, faAt, faMapMarkerAlt, faLink);

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page-container">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
