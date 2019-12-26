import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainProjects = () => {
  return (
    <div>
      <h3>Main PROJECTS</h3>
      <hr className="hr-headlines" />
      <div>
        <h4>Hargeisa Bus Station Management System</h4>
        <p>
          <FontAwesomeIcon
            icon="link"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          <a
            id="url-main-project"
            href="https://github.com/Abokorhassan/BSProject"
          >
            https://github.com/Abokorhassan/BSProject
          </a>
        </p>
        <ul>
          <li>
            It's a web based Bus station management system which helps bus
            station stuffs to manage their daily work effectively.
          </li>
        </ul>
      </div>
      <div>
        <h4>Bus Driver Track</h4>
        <p>
          <FontAwesomeIcon
            icon="link"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          <a
            id="url-main-project"
            href="https://github.com/Abokorhassan/BSDriverTrack"
          >
            https://github.com/Abokorhassan/BSDriverTrack
          </a>
        </p>
        <ul>
          <li>
            It's a mobile application attended to track down the location of the
            buses.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainProjects;
