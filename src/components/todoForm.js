import React from 'react';
import { Button, Input, TextArea, Segment, Form } from 'semantic-ui-react';

export class TodoForm extends React.Component {

  //handles submitting form on clicking Save button - sends form data to parent component for processing, prevents page refresh
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.saveForm(this.props.todoForm);
  };

  //handles reseting form on clicking Reset button - calls method from parent component, prevents page refresh
  onResetHandler = (event) => {
    event.preventDefault();
    this.props.resetForm();
  };

  //handles form changes in its fields, calls parent component method which sets its internal state with new data from fields
  onFormChangeHandler = (event) => {
    const formData = {
      property: event.target.name,
      value: event.target.value
    };
    this.props.formChangeHandler(formData);
  };

  render() {

    //decides if save/update button should be disabled
    let disabledButton = true;
    if(this.props.todoForm.title && this.props.todoForm.text) {
      disabledButton = false;
    }

    //which button Save / Update schould be rendered based on updateFlag
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
