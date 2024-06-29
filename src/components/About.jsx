import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }
  componentDidMount() {
    console.log('Parent component did mount');
  }
  render() {
    console.log('Parent render');
    return (
      <div>
        <h1>About us Page</h1>
        <h2>This is about us page</h2>
        <UserClass name="First" location="Gurugram" />
        <UserClass name="Second" location="Gurugram" />
        <UserClass name="Third" location="Gurugram" />
      </div>
    );
  }
}

export default About;
