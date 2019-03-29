class Nameform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {placeholder: 
            "Напишите что вы любите делать"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}); 
    }
    handleSubmit(event) {
        var answer;
        if (this.state.value === "Я люблю аниме") {
            var answer = "нам вас жаль";
        }
        else {
            var answer = "Интересно";
        }
        alert(answer);
        event.preventDefault();
    }

    render() {
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <textarea type="text" placeholder={this.state.placeholder} onChange={this.handleChange} />
        <br />
        <input type="submit" value="Отправить" />
        </form>
        </div>
        );
    }
}

ReactDOM.render(
    <Nameform />,
    document.getElementById('root')
    );