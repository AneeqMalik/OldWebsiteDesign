import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am  <span className="purple">  Aneeq Fayyaz Karim Malik </span>
            from <span className="purple"> Karachi , Pakistan.</span>
            <br />I am a sophomore pursuing Software Engineering in NED University Of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Food vlogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">Aneeq Malik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
