import "./App.css";

import Logo from "./component/Logo";
import Form from "./component/Form";
import PackageList from "./component/PackageList";
import Status from "./component/Status";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Status />
    </div>
  );
}

export default App;
