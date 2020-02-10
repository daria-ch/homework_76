import React, {Component} from 'react';
import {fetchMessages} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        return (
            <div>
                {this.props.messages.map( message => (
                    <div>{message.author}</div>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => ({
    fetchMessages: () => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);