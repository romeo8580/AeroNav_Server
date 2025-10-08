export const getMaps = (req, res) => {
  const maps = [
    { terminal: "A", floors: 3, gates: ["A1","A2","A3","A4","A5"] },
    { terminal: "B", floors: 2, gates: ["B1","B2","B3","B4","B5"] },
    { terminal: "C", floors: 1, gates: ["C1","C2","C3","C4"] }
  ];
  res.json({ maps, timestamp: new Date() });
};
