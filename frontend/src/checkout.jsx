import React from 'react';
import axios from 'axios';

const Checkout = () => {
  const handlePayment = async () => {
    const { data } = await axios.post('http://localhost:5000/create-order', {
      amount: 500, // ₹500
    });

    const options = {
       key: import.meta.env.VITE_RAZORPAY_KEY_ID, // FROM .env, not secret!
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: function (response) {
        alert('Payment successful!');
        console.log(response);
      },
      prefill: {
        name: 'Ankit Yadav',
        email: 'example@gmail.com',
        contact: '9999999999',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay ₹500</button>;
};

export default Checkout;
