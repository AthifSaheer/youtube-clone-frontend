import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

import classes from "./App.module.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className={classes.app__section}>
         <Sidebar />
         <Content />
      </div>
    </div>
  );
}

export default App;
