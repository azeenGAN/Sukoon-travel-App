const express = require('express')
const path = require('path');
//  const cors = require('cors');


const app = express()
const port = process.env.PORT || 8080


let q;
let t={
  Ryan_gosling:{
    name:"Ryan Gosling",
    position:"Cheif Talent Officer",
    depart:"Talent Aquisition",
    join_date:"March  2021",
    status:"currently working",
    education:"master's in health and safety management",
    description:"He was previously Global Chief Talent Officer at PepsiCo in addition to serving as Chief Human Resources Officer for global functions and groups. "
  },
  Maria_Fernandez:{
    name:"Maria Fernandez",
    position:"Chief Product Officer",
    depart:"Product Development",
    join_date:"early 2021",
    status:"currently working",
    education:"M.B.A. from the University of Chicago Booth School of Business",
    description:"She serves on the Board of Directors for Cure CMD."
  },
  Ava_Oliver:{
    name:"Ava Oliver",
    position:"Chief Technology Officer",
    depart:"Information Technology",
    join_date:"2020",
    status:"currently working",
    education:"Graduate of MIT and Stanford University",
    description:"Elizabeth previously worked in finance as a trader at Merrill Lynch and economist at Analysis Group before transitioning to the tech industry."
  },
  Meave_Murphy:{
    name:"Meave Murphy",
    position:"VP Finance and coorporate development",
    depart:"Accounts",
    join_date:"October 2020",
    status:"currently working",
    education:" Graduate of Bristol University",
    description:" Prior to Netflix, Spencer worked on Wall Street for 16 years, where he was an award-winning equity research analyst specializing in the Internet and Media sectors."
  }
}
// app.use(express.static('src'))


app.use(express.json());

// Your API processing middleware
app.use('/api/form', (req, res, next) => {
  // Your processing logic goes here
  req.body.Request_time = new Date().toString();

  // You can modify the req object or perform other actions as needed

  next(); // Move to the next middleware or route handler
});

// Your API endpoint
app.post('/api/form', (req, res) => {
  res.send(`Mr ${req.body.last_name}, your information has been received. Our staff member will reach out to you.`);
  console.log(req.body);
});

app.get('/leadership',(req, res)=>{
  res.send(t)
})
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Catch-all route for client-side routing

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});