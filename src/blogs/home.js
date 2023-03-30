// noinspection JSIgnoredPromiseFromCall

import React, {useRef, useState} from "react";
import {Container, Button, ButtonGroup, Form, Row, Col, FormLabel, FormControl} from "react-bootstrap";
import Style from "styled-components";
import Balancer from "react-wrap-balancer";
import emailjs from "@emailjs/browser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faJs,
    faHtml5,
    faCss3,
    faReact,
    faPython,
    faGithub,
    faGit,
    faLinkedin,
    faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';

const FullContainer = Style.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Header = Style.div`
    margin-bottom: 1rem;
    font-size: 2.5em;
    `
const Paragraph = Style.div`
    margin-bottom: 1rem;
    font-size: 1.5em;
    `
const TechStackInfo = Style.div`
text-align: center;
font-size: 1.5em;
text-decoration: underline;
color: #005e74;
`
const TechStack = Style.div``

const Home = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const ref = useRef();
    const formHandleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_xynddtm";
        const templateID = "template_uu76csu";
        const userID = "-nh_SbuLFMQAmTCvK";

        const formParams = {
            from_email: email,
            from_message: message
        };
        // <template id="my-template">
        //     <swal-title>
        //         Your Email Was Sent Successfully!
        //     </swal-title>
        //     <swal-icon type="warning" color="red"></swal-icon>
        //
        //     <swal-button type="deny">
        //         Nice!
        //     </swal-button>
        //     <swal-param name="allowEscapeKey" value="false"/>
        //     <swal-param
        //         name="customClass"
        //         value='{ "popup": "my-popup" }'/>
        //     <swal-function-param
        //         name="didOpen"
        //         value="popup => console.log(popup)"/>
        // </template>
        emailjs.sendForm(serviceID, templateID, ref.current, userID)
            .then((response) => {
                setEmail("")
                setMessage("")
                Swal.fire(
                    //     ! make this alert look better and friendlier for the user to understand that the form was successfully sent
                )
            }, (error) => {
                Swal.fire(error.text)
            });
    }
    const expIcons = [
        {icon: faJs, label: "Java Script"},
        {icon: faHtml5, label: "Html5"},
        {icon: faReact, label: "ReactJS"},
        {icon: faPython, label: "Python"},
        {icon: faGit, label: "Git-Version-Control"},
        {icon: faCss3, label: "CSS3"},
        {icon: faNodeJs, label: "NodeJS"},
    ];
    return (
        <>
            <FullContainer classname="Container-fluid">
                <Balancer>
                    <Header>Hi there 👋, My name is <mark>Moti Samadi</mark></Header>
                    <Paragraph>Contact me 📩 below for Web App Development.</Paragraph>
                    <TechStackInfo>I speak and use:</TechStackInfo>
                    <TechStack>
                        <Row>
                            {expIcons.map((iconObj, index) => (
                                <Col key={index}
                                     sm={2}
                                     md={3}
                                     lg={2}>
                                    <Button>
                                        <FontAwesomeIcon icon={iconObj.icon}/>.{iconObj.label}
                                    </Button>
                                </Col>
                            ))}

                        </Row>
                    </TechStack>
                </Balancer>
                <Row>
                    <Col>
                        <Button
                            href="https://github.com/motisam"
                            target="_blank"
                            variant="outline-dark"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </Button>
                        <Button
                            href="https://www.linkedin.com/in/motahhareh-samadi-b14203249/"
                            target="_blank"
                            variant="outline-dark"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </Button>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <a href="/blogs/create">
                                <Button variant="warning">Create Data</Button>
                            </a>
                            <a href="/blogs/show">
                                <Button variant="info">Show Data</Button>
                            </a>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Form ref={ref} onSubmit={formHandleSubmit}>
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                        >
                            <FormLabel>Your Email</FormLabel>
                            <FormControl required value={email} name="reply_to"
                                         onChange={(e) => setEmail(e.target.value)}></FormControl>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                        >
                            <FormLabel>Say Hello </FormLabel>
                            <FormControl required value={message} name="message"
                                         onChange={(e) => setMessage(e.target.value)}></FormControl>
                        </Col>
                        <Button type={"submit"}>Send your Email 📬</Button>
                    </Row>
                </Form>
            </FullContainer>
        </>
    )
}
export default Home;

//// ! For next class: - Add Programming Languages Icons with input fields for the contact form, and then route the contact form with the Emailjs Servers and perform a test email, Finally after that, deploy the project to the internet with the help of Firebase Deploy
