import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <hr className="hr-headlines" />
      <div>
        <h4>Bachelor of Software Engineering</h4>
        <h6>Abaarso Tech University</h6>
        <p>
          <FontAwesomeIcon
            icon="calendar-alt"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          2016 <span style={{ color: "#008cff" }}>-</span> 2019
        </p>
      </div>
      <hr className="hr-divider" />
      <div>
        <h4>High School Diploma</h4>
        <h6>Salaama Secondary School</h6>
        <p>
          <FontAwesomeIcon
            icon="calendar-alt"
            color="#008cff"
            size="sm"
            className="margin_btw_icon_and_label"
          />
          2012 <span style={{ color: "#008cff" }}>-</span> 2015
        </p>
      </div>
    </div>
  );
};

export default Education;
