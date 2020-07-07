import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    };


        render() {
        return (
            <div>
            <Navbar />
            Contact Page
            <div className="Contact">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
        
        
            onNameChange(this) {
            this.setState({name: this.target.value})
            }
        
            onEmailChange(this) {
            this.setState({email: this.target.value})
            }
        
            onMessageChange(this) {
            this.setState({message: this.target.value})
            }
        
        handleSubmit(event) {
        }
        </div>
        );
    };
};