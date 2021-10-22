import React from "react";
import moment from "moment";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import line from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { useGlobalContext } from "../context/Context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, line, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// const timestamp = 1519482900000;
// const formatted = moment(timestamp).format('L');
const FusionCrypto = ({ dataset }) => {
  const { days } = useGlobalContext();
  const minValue = [];
  const newData = dataset.map((price) => {
    minValue.push(price[1]);
    return {
      label:
        days === "1"
          ? moment(price[0]).format("hh:mm a")
          : moment(price[0]).format("L"),
      value: price[1],
    };
  });
  const value = Math.floor(Math.min(...minValue));
  const chartConfigs = {
    type: "line", // The chart type
    width: "100%", // Width of the chart
    height: "650", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        bgColor: "#292929",
        bgAlpha: "100",
        //Set the chart caption
        caption: "",
        //Set the chart subcaption
        // subCaption: "",
        //Set the x-axis name
        // xAxisName: "",
        //Set the y-axis name
        // yAxisName: "",
        //Set the theme for your chart
        theme: "candy",
        enableSmartLabels: "1",
        skipOverlapLabels: "1",
        yAxisMinValue: `${
          (value > 1000 && value - 100) ||
          (value > 100 && value < 1000 && value - 10)
        }`,
      },
      // Chart Data
      data: newData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default FusionCrypto;
