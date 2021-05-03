import React, { useState } from "react";

const Container = (props) => {
  const [inputNumber, SetInputNumber] = useState();
  const [StatusNumber, SetStatusNumber] = useState("isPrime");
  const [IsFiboNanci, SetFiboNanciNumber] = useState(false);

  const numberChangeHandler = (event) => {
    SetInputNumber(event.target.value);
    if (event.target.value < 0) {
      SetInputNumber(1);
    } else {
      SetInputNumber(Math.round(event.target.value));
    }
    isPrime(inputNumber);
  };
  const SelectChangeHandler = (event) => {
    SetStatusNumber(event.target.value).then(() => {
      isPrime(inputNumber);
    });
  };

  const isPrime = (num) => {
    console.log(StatusNumber);
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        console.log(num);

        StatusNumber === "isPrime"
          ? SetFiboNanciNumber(false)
          : SetFiboNanciNumber(true);
        return;
      }
    StatusNumber === "isFibonacci"
      ? SetFiboNanciNumber(true)
      : SetFiboNanciNumber(false);
    return;
  };

  return (
    <div class="row">
      <div class="col-pixel-width-200">
        <input
          type="number"
          onChange={numberChangeHandler}
          value={inputNumber}
        />
      </div>
      <div class="col centerItem">
        <select
          value={StatusNumber}
          id="cars"
          name="cars"
          onChange={SelectChangeHandler}
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div class="col-pixel-width-300">{IsFiboNanci.toString()}</div>
    </div>
  );
};

export default Container;
