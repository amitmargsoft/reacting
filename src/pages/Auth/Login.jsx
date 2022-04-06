import React,{useState} from 'react'
import {  Loader, Button, Header, Image, Modal, Checkbox, Form} from 'semantic-ui-react'

function Login(props) {
  const [open, setOpen,] = React.useState('')
  const [state,setCount] = useState({isLoaderActive:false})

  return (
    <Modal
   
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.button}
    >
      <Modal.Header>Login Panel</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/lock.jpg' wrapped />
        <Modal.Description style={{width:"400px"}}>
        <Form>
    <Form.Field>
        
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' primary onClick={()=>setCount({isLoaderActive:!state.isLoaderActive})}>{state.isLoaderActive?<Loader active inline size='mini' />:''} Submit</Button>
  </Form>
        </Modal.Description>
      </Modal.Content>
      {/* <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions> */}
    </Modal>
  )
}

export default Login