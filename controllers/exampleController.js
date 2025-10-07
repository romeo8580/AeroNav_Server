export const getExample = (req, res) => {
    res.json({ message: "Example route works!", timestamp: new Date() });
};
