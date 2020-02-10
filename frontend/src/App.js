import React, {Component} from 'react';
import {fetchMessages, sendMessage} from "./store/actions";
import {connect} from "react-redux";
import Message from "./components/Message/Message";
import FormBlock from "./components/FormBlock/FormBlock";
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

    sendMessage = async message => {
        await this.props.sendMessage(message);
        this.props.fetchMessages();
    };

    render() {
        const messages = this.props.messages.map(message => {
            let date = new Date(message.datetime);
            let hours = date.getUTCHours();
            let minutes = date.getUTCMinutes();
            let seconds = date.getUTCSeconds();
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            let time = hours + ':' + minutes + ':' + seconds;
            return (
                <Message
                    key={message.id}
                    nickname={message.author}
                    text={message.message}
                    datetime={time}
                />

            )
        });

        return (
            <div className="App">
                <div>
                    {messages}
                </div>
                <FormBlock
                    onSubmit={this.sendMessage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => ({
    fetchMessages: () => dispatch(fetchMessages()),
    sendMessage: (message) => dispatch(sendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);