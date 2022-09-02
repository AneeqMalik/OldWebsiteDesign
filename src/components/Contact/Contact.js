import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Particle from '../Particle';
import "./Contact.css";
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
        }
    }
    

    handleSubmit(e) {
        e.preventDefault();
        
        this.setState({
            disabled: true
        });

        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }



    render() {
        return (
            <Container fluid className="home-content">
                <Particle />
                <div id="container">
                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <h1 className="h1">Contact Me!</h1>

                        <input class="input-group" value={this.state.name} onChange={this.onNameChange.bind(this)} id="firstname" placeholder="First name" />

                        <input class="input-group" value={this.state.email} onChange={this.onEmailChange.bind(this)} id="email" placeholder="E-mail address" />

                        <textarea class="input-group" value={this.state.message} onChange={this.onMessageChange.bind(this)} id="message" placeholder="Message"></textarea>
                        <br />
                        <button disabled={this.state.disabled} className="btn btn-group btn-primary">Send</button>
                    </form>
                </div>
            </Container>
        )
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }


}
export default Contact
