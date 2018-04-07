import React from 'react';
import { Layout } from '../components/layout/Layout';
import Link from 'next/link'
import { Form, Message } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: false,
      content: 'Incorrect email or password.'
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value, error: false })
  handleSubmit = () => {
    const { email, password } = this.state
    email.includes('@') && email.includes('.') ? console.log({ email, password }) : this.setState({ error: true })
  }
  render() {
    const { email, password, error, content } = this.state

    return (
      <Layout>
        <div className='mainContainer'>
          <Form onSubmit={this.handleSubmit} error={error}>
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
            <Form.Button fluid content='Submit' />
            <Message error header='Error' content={content}/>
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

export default Login