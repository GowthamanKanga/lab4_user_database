const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/users')

const app = express();
app.use(express.json());
mongoose.set('strictQuery', false);

mongoose.connect(
  "mongodb+srv://fullstack:fullstack123@cluster0.vaju5po.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(success => {
  console.log("MongoDB connected successful");
}).catch(err => {
  console.log("MongoDB connection failed");
});

app.use(userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
