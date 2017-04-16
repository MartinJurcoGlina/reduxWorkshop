import React from 'react';
import { Button, Input, TextArea } from 'semantic-ui-react';

export class TodoForm extends React.Component {

  onSubmitHandler = () => {
    this.props.saveForm(this.props.todoForm);
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
      <div>
        <Input name="title" label='Title' placeholder='Enter todo title...' value={this.props.todoForm.title} onChange={this.onFormChangeHandler}/>
        <br/>
        <br/>
        <TextArea name="text" placeholder='Enter todo text...' value={this.props.todoForm.text} onChange={this.onFormChangeHandler}/>
        <br/>
        {submitButton}
        <Button onClick={this.props.resetForm}>Reset</Button>
      </div>
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
