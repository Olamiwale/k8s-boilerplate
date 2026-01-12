const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ 
    status: 'healthyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
     }));
app.get('/ready', (req, res) => res.json({ status: 'ready' }));
app.get('/', (req, res) => res.json({ 
  message: 'Hello from K8s!',
  env: process.env.NODE_ENV,
  pod: process.env.POD_NAME 
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


