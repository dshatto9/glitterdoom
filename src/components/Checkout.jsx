import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PXf5uRsJCZCg7W3gXpahtHdn9FOjafS1d5C2ltAowWAdYbZU0QbV7Ea405dXQqvqRIxzLEawZZlrjY9yPOwNoQs000rky2z76"
);

const Checkout = ({ items }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-[#EC2989] w-[200px] text-white font-bold py-2 px-4 rounded"
    >
      Checkout
    </button>
  );
};

export default Checkout;
