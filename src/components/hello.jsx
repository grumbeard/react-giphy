class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  // Define handleClick method
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }


  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : ""} onClick={this.handleClick}>
      Hello,

        {this.props.name}
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
