import React, { createContext, useContext, useState } from 'react';

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [ride, setRide] = useState({ rideId: null, fare: null, status: 'none' });

  const setRideDetails = (rideId, fare) => {
    setRide({ rideId, fare, status: 'booked' });
  };

  const updateRideStatus = (status) => {
    setRide((prev) => ({ ...prev, status }));
  };

  const resetRide = () => {
    setRide({ rideId: null, fare: null, status: 'none' });
  };

  return (
    <RideContext.Provider value={{ ride, setRideDetails, updateRideStatus, resetRide }}>
      {children}
    </RideContext.Provider>
  );
};

export const useRide = () => useContext(RideContext);
