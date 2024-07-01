import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        location: '',
      },
    };
  }
  async componentDidMount() {
    // Fetch data from the GitHub API using the specified URL.
    const data = await fetch('https://api.github.com/users/rituraj2084');

    // Parse the response as JSON and store it in the 'json' variable.
    const json = await data.json();

    // Log the fetched data to the console.
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.state.userInfo.name);
    return (
      <div>
        <img src={avatar_url} alt="profle pic" />
        <h1>Name: {name}</h1>
        <h2>Contact: @rituraj2084</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
