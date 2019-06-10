import * as React from "react";
import { render } from "react-dom";
import { useSpring, animated } from "react-spring";

function App() {
  const [show, setShow] = React.useState(false);

  const spring = useSpring({
    opacity: show ? 1 : 0
  });

  return (
    <div className="App">
      <animated.h1 style={spring}>Foo</animated.h1>

      <button onClick={() => setShow(!show)}>toggle</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
