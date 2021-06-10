import React from "react";
import Button from "react-bootstrap/Button";
import "./css/Contact.css";
export default function Contact() {
    return (
        <>
            <div className="contact"><br /><h1>Connect with me On : </h1></div>
            <br /><br /><br /> <br /><br /><br />
            <Button className="button" href="https://www.linkedin.com/in/asma-simreen/">LinkedIn</Button><br /><br /><br />
            <Button className="button" href="https://github.com/AsmaSimreen">GitHub</Button><br /><br /><br />
            <Button className="button" href="https://www.instagram.com/asma_simreen">Instagram</Button><br /><br /><br />
            <Button className="button" href="https://asmasimreen-1001.medium.com/">Medium</Button><br /><br /><br />

        </>
    );
}