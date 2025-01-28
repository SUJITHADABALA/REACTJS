import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ]),
// ]);

//JSX

// consts heading = (
//   <h1 className="head" tabIndex="5">
//     React using JSX
//   </h1>
// );

const Title = function () {
  return <h1>Hello</h1>;
};
// const Heading = function () {
//   return (
//     <div id="container">
//       <Title />
//       {Title()}
//       <Title></Title>
//       <h1 className="head">Namaste All</h1>
//     </div>
//   );
// };

const heading = (
  <h1 className="head" tabIndex="5">
    <Title></Title>
    React using JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);
root.render(heading);
