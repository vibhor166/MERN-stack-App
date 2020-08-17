const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/users')); //every backend route to start with /api, anything that goes to 'api/users' is going to get forwarded to the file inside require()

app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve static assets in production
if (process.env.NODE_env === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
