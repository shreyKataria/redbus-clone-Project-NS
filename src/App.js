import './App.css';
import './index.css'
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Journey from './components/Journey';
import SearchResults from './components/SearchResult';
import SeatSelection from './components/SeatSelection';
import { useState } from 'react';
import JourneyContext from './context/JourneyContext';



function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="App">
      <JourneyContext.Provider
        value={{
          from: from,
          to: to,
          setFrom: setFrom,
          setTo: setTo,
        }}
      >

          {/* Show these three things everywhere but after this the content should be shown according to the routes */}

           <Routes>
            {/* <Route path="/login" Component={Login} /> */}
            <Route path="/" element={<Journey Component={Homepage} />} />
            <Route path="/results" element={<Journey Component={SearchResults}/>} />
            <Route path="/seatbooking" element={<Journey Component={SeatSelection} />} />
          </Routes>
      
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
