import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => React.createElement - JS Object => HTMLElement(render)
// const jsxHeading = <h1>Namaste react using JSX</h1>;
// console.log(jsxHeading);
const Title = () => <h2>This is title</h2>;
const Heading = () => {
  return (
    <div id="container">
      <h1>Namaste react from functional component</h1>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);
