class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a: 0};
    }

    render() {
        return(
            <div>Hello world</div>
            );
    }
}

ReactDOM.render(
    <Component />,
    document.getElementById('root'));