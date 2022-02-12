import './App.css';
import history from "../src/services/history"
import 'antd/dist/antd.css'; 

import RootNavigation from "./routes";

function App() {
  return (
     <RootNavigation history={history}/>
  );
}

export default App;
