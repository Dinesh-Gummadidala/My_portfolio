import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinesh Gummadidala </span>
            from <span className="purple"> United States </span>
            <br />
            I am currently open for opportunities.
            <br />
            I have completed Masters in Computer Science.
        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing board games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Aim to develop solutions that have a lasting influence and significance!"{" "}
          </p>
          <footer className="blockquote-footer">Dinesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
