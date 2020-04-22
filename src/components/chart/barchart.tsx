import React, { useState } from 'react';
import "billboard.js/dist/theme/insight.css";
import bb from "billboard.js";

export default function BarChart() {
  var chart = bb.generate({
    data: {
      columns: [
        ["data1", 300, 350, 300, 0, 0, 100]
      ],
      types: {
        data1: "area"
      }
    },
    bindto: "#areaChart"
  });

  return (
    <div id="areaChart"></div>
  );
}
