import React from "react";
import { useNavigate } from "react-router-dom";
// import SeatSelection from "./SeatSelection";

const BusResult = ({ bus }) => {
  const navigate = useNavigate();
  return (
    <div
      className="row bg-white p-2 d-flex justify-content-between m-3 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={()=>{
        navigate('/seatbooking')
      }}
    >
       <div className="d-flex flex-column justify-content-between col-md-3">
        <div>BUSNAME</div>
      <h4>{bus.busName}</h4>
      </div>
      <div className="d-flex flex-column justify-content-between col-md-3">
        <div>DEPARTURE</div>
        <h4>{bus.departureTime}</h4>
      </div>

      <div className="d-flex flex-column col-md-3">
        <div>ARRIVAL</div>
        <h4>{bus.arrivalTime}</h4>
      </div>
      <div className="d-flex flex-column col-md-3">
        <div>PRICE</div>
      <h4>{bus.ticketPrice}/-</h4>
      </div>
    </div>
  );
};

export default BusResult;
