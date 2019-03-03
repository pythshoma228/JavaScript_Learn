class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "Vladimir"};
}

    componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(), 1000);

    setTimeout(() => {
  this.setState({
    name: "Andrey"
    });
    }, 10000);
}


    componentWillUnmount(){
        clearInterval(this.timerID);
}

    tick(){
        this.setState({
            date: new Date()
    });
}  

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}

ReactDOM.render(
  <Component />,
  document.getElementById('root')
);