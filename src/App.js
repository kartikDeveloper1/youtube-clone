import './App.css';
import Header from './components/Header';
import { AppContext } from './context/contextApi';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Feed from './components/Feed';
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path={"/"} exact element={ <Feed /> } />
            <Route path={"/video/:id"} element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
