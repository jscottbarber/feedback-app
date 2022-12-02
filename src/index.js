import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// import App from "./App"
import ListApp from "./ListApp"

//createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <ListApp />
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
