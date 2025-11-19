const parent = React.createElement(
  "div",
  { id: "parent" },
  [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "this is h1 tag"),
        React.createElement("h2", {}, "this is h2 tag")]
  ), React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "this is h1 tag"),
        React.createElement("h2", {}, "this is h2 tag")]
  )]
 
);


const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);




const heading = React.createElement("h1",{id: "heading"},"hello world from react js!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);