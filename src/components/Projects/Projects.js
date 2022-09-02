import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import amazon from "../../Assets/Projects/amazon.png";
import attendencesytem from "../../Assets/Projects/attendencesytem.png";
import chatapp from "../../Assets/Projects/chatapp.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Pakzone"
              description="Enhanced the existing website template with new features, payments gateways and more..."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Group Me (Chat App)"
              description="Used Chat Engine.io framework easy to use and integerate chats within any app"
              link="https://aneeqmalik.github.io/Group-Me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendencesytem}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="Used EmguCv (.NET wrapper of OpenCv) trained the faces using haarcascade classifier and used SQL database for storing the attendence of students and teachers..."
              link="https://github.com/AneeqMalik/Facial-Detection-Attendance-System-Using-CSharp-.Net-Framework-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
