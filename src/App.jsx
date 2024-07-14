import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimRoute from "./components/AnimRoute";
import Footer from "./components/Footer";
import Sale from "./components/Sale";
import { CartProvider } from "use-shopping-cart";

const App = () => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe="process.env.REACT_STRIPE_TOKEN"
      successUrl="http://localhost:5173/success"
      cancelUrl="http://localhost:5173/cancel"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      <Router>
        <Sale />
        <Navbar />
        <AnimRoute />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
