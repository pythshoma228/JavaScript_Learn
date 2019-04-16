class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {text: null};
}

    handleClick() {
        var chance = Math.floor(Math.random() * 4);

        let listText;

        if (chance == 0) {
            listText = <div className="text">Да</div>
        }

        else if (chance == 1) {
            listText = <div className="text">Нет</div>
        }

        else if (chance == 2) {
            listText = <div className="text">Не думаю</div>   
        }

        else if(chance == 3) {
            listText = <div className="text">Скорее всего</div>
        }

        this.setState({text: listText});
    }

    render() {
        return(
        <div id="magicball">
            {this.state.text}
            <img src="MagicBall.png" onClick={this.handleClick} />
        </div>
    );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
    );