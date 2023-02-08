const express = require("express");
// const connectDB = require("./config/db");
// const  chats  = require("./data/data");
const dotenv = require("dotenv");

let chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "John Doe",
          email: "john@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "John Doe",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Anthony",
          email: "anthony@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Anthony",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Doe",
          email: "jane@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Jane Doe",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Piyush",
          email: "piyush@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ];

dotenv.config();
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("API is Running Successfully");
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get("/api/chat/:id",(req,res) =>{
    const chat = chats.find((e)=>{
       return e.__id == req.params.id
    })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));
