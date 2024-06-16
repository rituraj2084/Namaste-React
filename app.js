// const heading = React.createElement(
//   'h1',
//   { id: 'heading' }, // attributes
//   'Hello World! from react' // children
// );
// console.log(heading); // it's a js object not h1 tag or any html tag
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // render method is converting object to html tag (here h1 tag)

/* 
    <div id="parent">
      <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
      </div>
      <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
      </div>
    </div>
*/
let parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', '', "I'm h1 tag"),
    React.createElement('h2', '', "I'm h2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', '', "I'm h1 tag of child2"),
    React.createElement('h2', '', "I'm h2 tag of child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
