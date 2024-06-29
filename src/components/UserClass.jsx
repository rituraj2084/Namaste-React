import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + ' Child constructor');
  }
  componentDidMount() {
    console.log(this.props.name + ' Child component did mount');
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + ' Child render');
    return (
      <div>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increse
        </button>
        <h1>Name: {name}</h1>
        <h2>Contact: @rituraj2084</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
