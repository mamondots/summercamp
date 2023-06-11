import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
const Payment = () => {
    return (
        <div className="w-full">
            <h2 className="pb-12">this is payment page</h2>

            <Elements stripe={stripePromise}>
             <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;