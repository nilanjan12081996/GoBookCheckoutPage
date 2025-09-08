import React from "react";

import { Chart } from "react-google-charts";

const datanew = [
  ["Task", "Hours per Day"],
  ["Orders", 70],
  ["Cancellation", 50],
  ["Refunds", 10],
];

const OrderStatus = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={datanew}
        //options={options}
        width={"100%"}
        height={"305px"}
      />
    </div>
  );
};

export default OrderStatus;
