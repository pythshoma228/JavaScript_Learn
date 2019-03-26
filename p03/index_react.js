function Mailbox(props) {
    const unreadmessages = props.unreadmessages;
    return(
    <div>
        {unreadmessages.length > 0 &&
            <div>
            <h1>У вас {unreadmessages.length} непрочитанных:</h1>
                <div>{unreadmessages}</div>
            </div>
        }
        {unreadmessages.length <= 0 &&
            <h1>У вас нет непрочитанных сообщений</h1>
        }
    </div>
    );
}

const messages = ["КОЛЯН ГО БУХАТЬ!!1 ", "КОЛЯН НЕ ИГНОРЬ! "];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.showMessages = this.showMessages.bind(this);
        this.closeMessages = this.closeMessages.bind(this);
        this.state = {mailbox: null};
    }


    showMessages() {
        this.setState({mailbox: <Mailbox unreadmessages={messages} />});
    }
    closeMessages(){
        this.setState({mailbox: null});
    }

    render() {
        return(
        <div>
            <button onClick={this.showMessages}>Посмотреть все сообщения</button>
            <button onClick={this.closeMessages}>Закрыть сообщения</button>
            <div>{this.state.mailbox}</div>
        </div>
        );
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
    );