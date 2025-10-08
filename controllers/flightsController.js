export const getFlights = (req, res) => {
  const flights = [
    { id: 1, airline: "Delta", flightNumber: "DL123", status: "On Time", gate: "A5" },
    { id: 2, airline: "United", flightNumber: "UA456", status: "Delayed", gate: "B12" },
    { id: 3, airline: "American", flightNumber: "AA789", status: "Boarding", gate: "C3" }
  ];
  res.json({ flights, timestamp: new Date() });
};
