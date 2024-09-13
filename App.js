/*
* div parent and two children
*/

const heading = React.createElement(
    "h1",
    {"data-index": "head", id: "title"},
    "Hello World From React!"
);

const h1 = React.createElement("h1", {id: 'primary'}, 'Primary heading');
const h2 = React.createElement("h2", {id: 'secondary'}, 'Secondary heading');

const child1 = React.createElement("div",{className: "child1"}, h1);

const child2 = React.createElement("div", {className: "child2"}, h2);

const parent = React.createElement("div", {id: "parent"}, [heading,child1, child2]);


console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);