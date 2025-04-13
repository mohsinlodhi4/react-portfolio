import React from "react";
import "./EducationSection.css"; // Optional if you want to customize further

const EducationSection = () => {
  return (
    <div id="education" class="sectionClass">
          <div class="row px-2">
            <div class="sectiontitle">
              <h2>Education</h2>
              <span class="headerLine"></span>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body mx-2">
                <h5 className="card-title">Bachelors in Software Engineering</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Sir Syed University of Engineering and Technology (2020 - 2024)
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                    GPA 3.35/4.0
                </h6>
                <div class="fullWidth eight columns">
                    <ul className="mt-3 mb-0">
                        <li style={{listStyle:'disc'}}>Major in Software Engineering</li>
                        <li style={{listStyle:'disc'}}>Data Structures & Algorithms</li>
                        <li style={{listStyle:'disc'}}>System Design & Architecture</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EducationSection;
