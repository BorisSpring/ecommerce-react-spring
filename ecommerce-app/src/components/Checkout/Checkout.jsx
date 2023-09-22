import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DeliveryAdressForm from "./DeliveryAdressForm";
import OrderSummary from "../../components/Checkout/OrderSummary";
import StripeForm from "../Stripe/StripeForm";

const steps = ["Login", "Add delivery adress", "Order summary", "Payment"];

const Checkout = () => {
  const [orderRequest, setOrderRequest] = React.useState({});

  {
    const [activeStep, setActiveStep] = React.useState(1);

    return (
      <Box
        sx={{
          width: "100%",
          px: { xs: "40px", lg: "40px" },
          mt: "50px",
          mb: "50px",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box>
          {activeStep === 1 && (
            <DeliveryAdressForm
              setOrderRequest={setOrderRequest}
              setActiveStep={() => setActiveStep((prev) => prev + 1)}
            />
          )}
          {activeStep === 2 && (
            <OrderSummary
              orderRequest={orderRequest}
              setActiveStep={() => setActiveStep((prev) => prev + 1)}
            />
          )}
          {activeStep === 3 && <StripeForm orderRequest={orderRequest} />}
        </Box>
      </Box>
    );
  }
};

export default Checkout;
