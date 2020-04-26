import React, { useState, useEffect} from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionEvents from '../components/SectionEvents/SectionEvents';
import EventsInfoBox from '../components/EventsInfoBox/EventsInfoBox';
import eventsMockedData from '../lib/events';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';


const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsSearch, setEventsSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = search => {
    setSearchTerm(search.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(eventsMockedData);
    }, 1000);
      
    const results = events.filter(person => person.title.toLowerCase().includes(searchTerm));
    if(results.length > 0){
      setEventsSearch(results);
    }
    else{
      setEventsSearch(eventsMockedData);
    }
      
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const ShowEvents = () => {
    return eventsSearch.map((event, index) => (
      <EventsInfoBox
          key={index}
          title = {event.title}
          about = {event.about}
          location = {event.location}
          dateTime = {event.dateTime}
      />
    ))
  };

  return (
    <>
      <PageTitle title="Događanja" />
      {events == "" ? <SearchBar active={true} change={changeHandler} placeholder={"Search events"} value={searchTerm} /> : <SearchBar active={false} change={changeHandler} placeholder={"Search events"} value={searchTerm} /> }
      <SectionEvents>
        {events == "" ? <Loader/> : ShowEvents()}
      </SectionEvents>
    </>
  );
}

export default Events;