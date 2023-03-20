
import React, { useContext, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { BsArrowLeftRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";

function SearchLocation() {
  const [journeyDate, setJourneyDate] = useState("");
  const navigate=useNavigate();
  const {from,to,setFrom,setTo}=useContext(JourneyContext);

  function interchangeFromTo() {
    const startPoint = from;
    const endPoint = to;
    setFrom(endPoint);
    setTo(startPoint);  
  }

  function searchBuses(){
    if(!from||!to||!journeyDate){
      toast.error("All fields are required")
    }
    else{
     navigate("/results")
    }
  }

  return (
    <Container className="p-3 mb-2">
      <h1 className="p-2">Bus Ticket Booking Online</h1> 
      <div className="m-3">
        <InputGroup className="flex align-items-center">
          <Form.Control className="rounded-0"
            placeholder="Source"
            aria-label="Text input with dropdown button"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
          <BsArrowLeftRight onClick={interchangeFromTo} className="mx-3" />
          <Form.Control 
            placeholder="Destination"
            value={to}
            aria-label="Text input with dropdown button"
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
          <Form.Control
            value={journeyDate}
            placeholder="Date"
            type="date"
            onChange={(e) => {
              setJourneyDate(e.target.value);
            }}
            aria-label="Text input with dropdown button"
          />
          <Button style={{backgroundColor:"#d41313" , border:"none"}} className ="rounded-0" onClick={searchBuses}>Search Buses</Button>
        </InputGroup>
        </div>      
    </Container>
  );
}

export default SearchLocation
