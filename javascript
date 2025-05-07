const express = require('express');
const app = express();
app.use(express.json());

app.post('/check', (req, res) => {
  const { amount } = req.body;
  if (amount > 1000) {
    res.json({ fraud: true });
  } else {
    res.json({ fraud: false });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
