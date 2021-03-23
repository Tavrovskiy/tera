class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h2>TO DO</h2>
         <label htmlFor="new-todo">
            What needs to be done?
          </label>
         <br />
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
          	class="input"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button class="section-btn">
            Add
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    );
  }
}


ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)