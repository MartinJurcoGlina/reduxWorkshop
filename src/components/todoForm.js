import React from 'react';
import { Button, Input, TextArea, Segment, Form } from 'semantic-ui-react';

export class TodoForm extends React.Component {

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.saveForm(this.props.todoForm);
  };

  onResetHandler = (event) => {
    event.preventDefault();
    this.props.resetForm();
  };

  onFormChangeHandler = (event) => {
    const formData = {
      property: event.target.name,
      value: event.target.value
    };
    this.props.formChangeHandler(formData);
  };

  render() {

    let disabledButton = true;
    if(this.props.todoForm.title && this.props.todoForm.text) {
      disabledButton = false;
    }

    const submitButton = this.props.updateFlag ?
      (<Button color='blue' disabled={disabledButton} onClick={this.onSubmitHandler}>Update</Button>) :
      (<Button color='green' disabled={disabledButton} onClick={this.onSubmitHandler}>Save</Button>);

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Title</label>
            <Input name="title" placeholder='Enter todo title...' value={this.props.todoForm.title} onChange={this.onFormChangeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Todo Text</label>
            <TextArea name="text" placeholder='Enter todo text...' value={this.props.todoForm.text} onChange={this.onFormChangeHandler}/>
          </Form.Field>
          {submitButton}
          <Button onClick={this.onResetHandler}>Reset</Button>
        </Form>
      </Segment>
    );
  }
}

TodoForm.propTypes = {
  todoForm: React.PropTypes.object.isRequired,
  updateFlag: React.PropTypes.bool.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  saveForm: React.PropTypes.func.isRequired,
  formChangeHandler: React.PropTypes.func.isRequired
};
