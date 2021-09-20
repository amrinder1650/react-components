// TODO
var App = () => (
  <div>
    <GroceryList items = {["Kale", "Cucumbers", "Pizza"]}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item = {item}/>
    )}
  </ul>
);



class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onHoverItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style}
      onMouseEnter={this.onHoverItemClick.bind(this)}
      onMouseLeave={this.onHoverItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
