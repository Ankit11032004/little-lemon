import { useState } from "react";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Ankit's Store",
      description: "Test Payment",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: "Ankit Yadav",
        email: "ankityadav@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-2xl shadow-lg bg-white border">
      <h2 className="text-2xl font-semibold mb-4">Make a Payment</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        className="w-full p-3 mb-4 border rounded-lg"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        onClick={handlePayment}
        disabled={!amount}
      >
        Pay Now ₹{amount || "0"}
      </button>
    </div>
  );
};

export default PaymentForm;
