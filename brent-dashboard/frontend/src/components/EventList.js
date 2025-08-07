import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
            .then(res => setEvents(res.data));
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {events.map((event, idx) => (
                    <li key={idx}>{event.date}: {event.event}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
