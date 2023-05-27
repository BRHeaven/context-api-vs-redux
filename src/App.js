import HomePageContext from "./Source/HomePageContext";
import HomePageRedux from './Source/HomePageRedux';
import './Css/main.css';
function App() {
  return (
    <div className="App">
      <HomePageContext/>
      <HomePageRedux/>
    </div>
  );
};

export default App;
