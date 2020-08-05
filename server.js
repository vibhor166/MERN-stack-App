const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the contactkeeper API' });
});

//Define Routes
app.use('/api/users', require('./routes/users')); //every backend route to start with /api, anything that goes to 'api/users' is going to get forwarded to the file inside require()

app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
