import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe="sk_test_51PXf5uRsJCZCg7W3SWnOCbjVsie358bitcrQGOBNMS8krflIV1lOwFcjEYuTwlBnQ41KtNMwr14hCxrTpPMV8oEF00DuRPOUgu"
      successUrl="http://localhost:5173/stripe/success"
      cancelUrl="http://localhost:5173/stripe/cancel"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
