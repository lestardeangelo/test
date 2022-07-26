import express, { response }  from "express";
import {v4 as uuidv4 } from "uuid"

const app = express();
app.use(express.json());

const users = []


app.post("/user", (request, response) => {
    const { email, name } = request.body

    const userArealdyExists = users.find((user) => user.email === email);

    if (userArealdyExists) {
      return response
        .status(400)
        .json({ 
          error: "This email address is already being used" 
        });
    }

    const newUser = {
      id: uuidv4(),
      email,
      name,
    }

    users.push(newUser);

    return response.status(201).json(newUser);
  });

app.get("/", (request, response) =>{
    response.send("hello kenzie")
});

app.listen(3000)