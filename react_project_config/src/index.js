import React from "react";
import ReactDOM from 'react-dom/client';

function Homepage() {
  // -- step 3: add attribute title in Header tag
  return <div>
    <Header title="Hi aja" />
    <Header title="Hello World 2" />
  </div>
}

// -- step 1: add "props" in parameter
function Header(props) {
  // -- step 2: change static text to {props.title}
  return <h1>{props.title}</h1>
}

const app = document.getElementById('app');
ReactDOM.createRoot(app).render(<Homepage />)