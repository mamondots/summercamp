import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import useSeletedClass from "../../Hooks/useSeletedClass";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
const Payment = () => {
    const [seletedClass] = useSeletedClass()
    const total = seletedClass.reduce((sum, item) => item.price + sum, 0)
    
    return (
        <div className="w-full">
            <h2 className="pb-12">this is payment page</h2>

            <Elements stripe={stripePromise}>
             <CheckOut price={total}></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;