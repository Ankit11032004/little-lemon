// src/components/RazorpayCheckout.jsx
import React from "react";

const RazorpayCheckout = ({ name, date, time }) => {
  const loadRazorpay = () => {
    const options = {
      key: "rzp_test_gMRyCrgIZn9GsK", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in paise (50000 paise = ₹500)
      currency: "INR",
      name: "My Business",
      description: "Test Transaction",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Ankit Yadav",
        email: "ankit@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Business Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={loadRazorpay} className="pay-btn">
      Pay ₹500
    </button>
  );
};

export default RazorpayCheckout;
