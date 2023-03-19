import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import JourneyContext from "../context/JourneyContext";
import BusResult from "./BusResult";

const SearchResults = () => {
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { from, to } = useContext(JourneyContext);
 

  async function fetchBuses() {
    setIsLoading(true);
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`
    );
    const allBuses = await response.json();
    setIsLoading(false);
    setBuses(allBuses);
  }
  useEffect(() => {
   fetchBuses();
   // eslint-disable-next-line
  },[from , to]);

  function sortResults(criteria){
    if(criteria==="Price"){
        const busesCopy=[...buses]
        const sortedBuses=busesCopy.sort((a,b)=>{
            if(a.ticketPrice<b.ticketPrice){
                return -1
            }else {
              return 1
            }
                
              
            
        })
        setBuses(sortedBuses)
    }
  }

  if (isLoading) {
    return <Spinner animation="grow" style={{backgroundColor:"#d41313"}} />;
  }
  

  return (
    <div style={{backgroundColor:"#d41313"}} className="p-2 d-flex flex-column">
      <div className="bg-white p-2 d-flex w-75 align-self-center">
        <h4 className="w-50">SORT BY:</h4>
        <div className="d-flex justify-content-around w-100">
          {["Departure", "Arrival", "Ratings" ,"Price"].map((criteria) => {
            return (
              <Button style={{backgroundColor:"#d41313" , border:"none"}} className="rounded-0" onClick={()=>{
                sortResults(criteria)
              }}>
                {criteria}
              </Button>
            );
          })}
        </div>
      </div>
      {buses.map((bus) => {
        return <BusResult bus={bus} />;
      })}
    </div>
  );
};

export default SearchResults;
