import React from 'react';
import PriceChart from './components/PriceChart';
import EventList from './components/EventList';

function App() {
    return (
        <div className="App">
            <h1>Brent Oil Price Explorer</h1>
            <PriceChart />
            <EventList />
        </div>
    );
}

export default App;
