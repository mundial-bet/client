import React from 'react'
import { Button, Header, Modal, Form, Message, Checkbox } from 'semantic-ui-react'

const errors = [
  'Incorrect league name, you just can use numbers and letters.',
  'Max number of participants is 1000'
]
export class CreateLeague extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      maxParticipants: '',
      isPrivated: false,
      error: false,
      open: false,
      content: 'Incorrect email or password.'
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value, error: false })
  handleCheckBox = (e, { name, checked }) => this.setState({ [name]: checked, error: false })

  handleSubmit = () => {
    const { name, maxParticipants, isPrivated } = this.state
    if( name.match(/[^A-Za-z0-9]+/g) != null) this.setState({ error: true, content: errors[0]})
    else if(maxParticipants>1000) this.setState({ error: true, content: errors[1]})
    else {
      console.log({ name, maxParticipants, isPrivated })
      this.close()
    }
    
  }
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { name, maxParticipants, isPrivated, error, content, open } = this.state
    return (
      <Modal trigger={<Button onClick={() => this.show()}>Create League</Button>} open={open} onClose={this.close}>
        <Modal.Header>New League</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit} error={error}>
              <Form.Input
                label='League name'
                name='name'
                value={name}
                onChange={(e, value) => this.handleChange(e, value)}
              />
              <Form.Input
                type='number'
                label='Max Participants'
                name='maxParticipants'
                value={maxParticipants}
                onChange={(e, value) => this.handleChange(e, value)}
              />
              <Form.Field 
                control={Checkbox}
                label='Private' 
                name='isPrivated'
                onChange={(e, value) => this.handleCheckBox(e, value)}/>
              <Form.Button fluid content='Submit' />
              <Message error header='Error' content={content} />
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
