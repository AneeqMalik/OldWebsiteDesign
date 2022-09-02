import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="ERP Odoo Developer Intern"
              date="May 2021 - July 2021"
              content={[
              "Work closely with all levels of employees to understand current and desired processes and procedures",
              "Act as the liaison between our client and software vendors to deliver solutions for our client's business needs",
              "Work with hardware and software vendors as well as internal team to troubleshoot complex issues",
              "Actively manage small, independent projects and play a significant role working on team projects"

              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Google Cloud Seekho [Season 3]"
              content={[
                "Worked on cloud design, architecture, essentials and security.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="NED UNIVERSITY OF ENGINEERING AND TEHNOLOGY. "
              date="2020 - Present"
              content={[`CGPA: ${3.7} (Till ${1}st Sem)`]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                "Problem Solving Certificate, Hacker Rank Feb, 2021",
                "Python (Basic), Hacker Rank May, 2021",
                "Introduction to Machine Learning with Azure (AI-900), Microsoft Certified.",
                "Introduction TO WEB DEVELOPMENT (HTML, CSS, JS), Udemy May, 2021",
                "REACT JS, Udemy May 2021",
                "JavaScript (Basic), Hacker Rank May, 2021",
                "Artificial Intelligence Concepts, IBM Apr 2021",
                "Introduction to Machine Learning with Python, IBM June 2021",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in CodeChef 70486`,
                `Four 🌟 coder in HackerRank `,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
