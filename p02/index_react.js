class Component extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {counter: 0};
}

    handleClick(){
        this.setState({counter: ++this.state.counter});
        //alert("hello world");
    }

    render(){

        return (
            <div>
                <button onClick={this.handleClick}>Clicked {this.state.counter}</button>
            </div>
        );
    }
}

ReactDOM.render(
	<Component />,
	document.getElementById('root'));