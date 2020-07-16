import React, { Component } from 'react';
import Axios from 'axios';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.onNameChange.bind(this);
        this.onEmailChange.bind(this);
        this.onMessageChange.bind(this);
        this.handleSubmit.bind(this);
    };
    onNameChange(event) {
        this.setState({name: event.target.value})
        }
        onEmailChange(event) {
        this.setState({email: event.target.value})
        }
        onMessageChange(event) {
        this.setState({message: event.target.value})
        }
    handleSubmit(event) {
        event.preventDefault();
        Axios.post('/api/contact-us/send', this.state).then(function(res){
            console.log(res);

        }).catch(function(err){
            console.log(err);
        });
    }
        render() {
            
        return (
            <div>
            
            <div className="ContactUs">
            <form id="contact-us-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
            </div>
        );
    };
};