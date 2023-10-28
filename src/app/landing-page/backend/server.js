const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const scooters = [
  { id: 1, name: 'Scooter A', maxSpeed: 30, batteryPercentage: 80 },
  { id: 2, name: 'Scooter B', maxSpeed: 25, batteryPercentage: 90 },

];

app.get('/api/scooters', (req, res) => {
  res.json(scooters);
});

app.post('/api/scooters', (req, res) => {
  const scooter = req.body;
  scooter.id = scooters.length + 1;
  scooters.push(scooter);
  res.status(201).json(scooter);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
