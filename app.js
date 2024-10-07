//app.js
const express = require("express")
const path = require("node:path")

const app = express();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

app.use(express.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages });
  });
  
  // "New message" form route
app.get('/new', (req, res) => {
    res.render('form', { title: "New Message" });
  });
  
  // Handle form submission
app.post('/new', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
  });
  
  // Serve static files from /public
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });