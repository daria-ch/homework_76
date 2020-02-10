import React, {Component} from 'react';
import './FormBlock.css';
import Button from "../Button/Button";

class FormBlock extends Component {
    state = {
        author: '',
        message: ''
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state})
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
            <form className='formBlock' onSubmit={this.submitFormHandler}>
                <div className="form-group">
                    <label htmlFor={"author"}>Nickname</label>
                    <input type="text" required className="form-control" id="author" name="author"
                           placeholder="Enter your nickname"
                           autoComplete="off" onChange={this.inputChangeHandler} value={this.state.author}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={"message"}>Message</label>
                    <input type="text" required className="form-control" id="message" placeholder="Text your message"
                           name="message"
                           autoComplete="off" onChange={this.inputChangeHandler} value={this.state.message}
                    />
                </div>
                <Button
                    onClick={this.submitFormHandler}
                />
            </form>
        );
    }
}

export default FormBlock;