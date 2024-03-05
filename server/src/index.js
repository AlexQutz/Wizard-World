const express = require('express');
const cors = require('cors');
const housesRoutes = require('./routes/housesRoute');

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', housesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});