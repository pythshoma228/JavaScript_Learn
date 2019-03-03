<<<<<<< HEAD
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
=======
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
>>>>>>> bec95967d3af91dcb5524a944d67e8bd82811c59
	document.getElementById('root'));