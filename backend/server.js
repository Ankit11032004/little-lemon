const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 5000;

const authRouter= require("./routes/auth.routes")

app.use('/api/auth', authRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => 
    {
        console.log('MongoDB connected')
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
  .catch(err => console.log(err));