import React, { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";
import RedbusNavbar from "./Navbar";
import SearchLocation from "./SearchLocation";

const Journey = ({ Component }) => {
  const navigate = useNavigate();
  const { from, to } = useContext(JourneyContext);
  useEffect(() => {
    if (!from || !to) {
        navigate("/");
      }else{
        navigate("/results")
      }// eslint-disable-next-line
  },[]);

  return (
    <div>
      <Toaster />    
      <RedbusNavbar/>
      <SearchLocation />
      <Component />

     
    </div>
  );
};

export default Journey;
