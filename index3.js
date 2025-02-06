const express = require('express');
const app = express();
const PORT = 8000;

//Middleware to parese JSON bodies
app.use(express.json());

//Sample data 
let users=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'}
];

//GET enpoint to retrieve all users
app.get('/api/users',(req,res)=>{
    res.json(users);
});
//POST
app.post('/api/users',(req,res)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
//GET endpoint to retrieve a user by ID
app.get('api/users/:id',(req,res)=>{
    const user = users.find(u=>u.id === parseInt(req.params.id));
    if(!user)return res.status(404).send('User not found');
    res.json(user);
});
//DELETE endpoint to delete a user by ID
app.delete('/api/users/:id',(req,res)=>{
    const userIndex=users.findIndex(u => u.id===parseInt(req.params.id));
    if(userIndex === -1)return res.status(404).send('User not found');
    const deletedUser = users.splice(userIndex,1);
    res.json(deletedUser);
});

//Start the server 
app.listen(8000,()=> {
    console.log(`Server is running on http://localhost:8000}`);
});

