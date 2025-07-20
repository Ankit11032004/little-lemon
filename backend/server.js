const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Razorpay = require('razorpay');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // convert to paise
      currency: 'INR',
      receipt: 'receipt#1',
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating order');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
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




