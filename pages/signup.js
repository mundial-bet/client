import React from 'react';
import { Layout } from '../components/layout/Layout';
import Link from 'next/link'
import { Form, Message } from 'semantic-ui-react'

const errors = [
  'Incorrect username, you just can use numbers and letters.',
  'Incorrect email.',
  'Passwords don\'t match.'
]
class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      error: false,
      content: errors[0]
    }
  }
  handleChange = (e, { name , value }) => {
    this.setState({ [name]: value, error: false })
  }
  handleSubmit = () => {
    const { username, email, password, password2 } = this.state
    if( username.match(/[^A-Za-z0-9]+/g) != null) this.setState({ error: true, content: errors[0]})
    else if(!email.includes('@') && !email.includes('.')) this.setState({ error: true, content: errors[1]})
    else if(password != password2) this.setState({ error: true, content: errors[2]})
    else console.log({ username, email, password, password2 } )
  }
  render() {
    const { username, email, password, password2, error, content } = this.state

    return (
      <Layout>
        <div className='mainContainer'>
          <Form onSubmit={this.handleSubmit} error={error}>
            <Form.Input
              label='Username'
              name='username'
              value={username}
              onChange={(e, value) => this.handleChange(e, value)}
            />
            <Form.Input
              label='Email'
              name='email'
              value={email}
              onChange={(e, value) => this.handleChange(e, value)}
            />
            <Form.Input
              type='password'
              label='Password'
              name='password'
              value={password}
              onChange={(e, value) => this.handleChange(e, value)}
            />
            <Form.Input
              type='password'
              label='Confirm password'
              name='password2'
              value={password2}
              onChange={(e, value) => this.handleChange(e, value)}
            />
            <Form.Button fluid content='Submit' />
            <Message error header='Error' content={content} />
          </Form>
        </div>
        <style jsx>{`
          .mainContainer{
            position: relative;
            top: 45px;
            width: 90%;
            margin: auto;
          }
          `}</style>
      </Layout>
    )
  }

}

export default Signup