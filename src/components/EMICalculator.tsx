import React, { useState } from "react";

// total amount input
// interest rate input
// downpayment Slider
// EMI slider
// tenure input

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [Tenure, setTenure] = useState(0);
  const [downPayment, setDownPayemnt] = useState(0);
  const [EmiAmount, setEmiAmount] = useState(0);
  const [initalDownPayment, setInitialDownPayemnt] = useState(0);

  const pricessingFee = 0.01 * loanAmount;

  const finalDownpayemnt = downPayment + pricessingFee;
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = Tenure * 12;

  const principalAmount = loanAmount - finalDownpayemnt;

  const emi =
    Tenure &&
    principalAmount &&
    (principalAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

  const handleEmiChange = (e) => {
    const targetEmi = Number(e.target.value);

    const loanPrincipal =
      (targetEmi * (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)) /
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths));

    const requiredDownPayment = loanAmount + pricessingFee - loanPrincipal;

    setDownPayemnt(requiredDownPayment);
  };

  return (
    <div className="flex h-full w-[80%]  flex-col gap-3 justify-center items-center">
      <h3>EMI Calculator</h3>
      <div className="flex w-[50%] flex-col gap-7">
        <div className="flex flex-col gap-3">
          <label>Total Loan Amount</label>
          <input
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="border-2 border-black"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label>Interest Rate (pa%)</label>
          <input
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="border-2 border-black"
          />
        </div>

        <div className="flex w-full min-w-[250px] flex-col gap-3">
          <div>Down Payment</div>
          <input
            value={downPayment}
            onChange={(e) => setDownPayemnt(Number(e.target.value))}
            min={0}
            max={loanAmount}
            type="range"
          />
          {downPayment}
        </div>

        <div>
          Total Down Payment = Down Payemnt ({initalDownPayment}) + processing
          fee ({0.01 * loanAmount}) Principal Amount {principalAmount}
        </div>

        <div className="flex w-full min-w-[250px] flex-col gap-3">
          <div>EMI calculated</div>
          <input
            value={emi}
            onChange={(e) => handleEmiChange(e)}
            min={0}
            max={loanAmount}
            type="range"
          />
          {emi}
        </div>

        <div className="flex flex-col gap-3">
          <label>Tenure</label>
          <input
            onChange={(e) => setTenure(Number(e.target.value))}
            className="border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
