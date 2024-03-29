import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import emailStyles from './email.module.css';


export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
    alert('Succesfully subscribed!')
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
      <div className={emailStyles.formIn}>
      <form onSubmit={this._handleSubmit}>
      <TextField
        className={emailStyles.formIn}
        id="outlined-email-input"
        label="First Name"
        type="fname"
        name="fname"
        autoComplete="fname"
        variant="outlined"
        onChange={this.handleChange}
      />
      <br />
      <br />
      <TextField
        className={emailStyles.formIn}
        id="outlined-email-input"
        label="Last Name"
        type="lname"
        name="lname"
        autoComplete="lname"
        variant="outlined"
        onChange={this.handleChange}
      />
      <br />
      <br />
        <TextField
          className={emailStyles.formIn}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Join my email list!</Typography>
        </Button>
      </form>
      </div>
    )
  }
}
