import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log("Parents Component Did Mount Called");
  }
  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <h2>This is about us page</h2>
        <UserClass name="First" location="Gurugram" />
      </div>
    );
  }
}

export default About;
