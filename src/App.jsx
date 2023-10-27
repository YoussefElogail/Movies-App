import { BrowserRouter as Reuter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import ContextProvider from "./conText/GlobalContext";
import "./App.css";
function App() {
  return (
    <>
      <Reuter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="watch-list" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
          </Routes>
        </ContextProvider>
      </Reuter>
    </>
  );
}

export default App;
