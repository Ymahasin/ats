import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

type GaugeChartProps = {
  match: number;
};

export const MatchGauge = ({ match }: GaugeChartProps) => {
  const options = {
    chart: {
      type: "gauge",
      backgroundColor: "white",
      plotShadow: true,
      //   height: "50%",
      width: 400,
      height: 250,
      //   padding: 10,
      spacing: [10, 0, 0, 0],
    },

    title: {
      text: "Match Score",
    },
    credits: {
      enabled: false,
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: null,
      center: ["50%", "75%"],
      size: "100%",
    },

    // the match axis
    yAxis: {
      min: 0,
      max: 100,
      tickPixelInterval: 72,
      tickPosition: "inside",
      tickColor: Highcharts.defaultOptions?.chart?.backgroundColor || "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
          backgroundColor: null,
          opacity: 10,
          filter: "alpha(opacity=10)",
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 53,
          color: "#DF5353", // red
          thickness: 20,
          borderRadius: "50%",
        },
        {
          from: 50,
          to: 87,
          color: "#DDDF0D", // yellow
          thickness: 20,
        },
        {
          from: 80,
          to: 100,
          color: "#55BF3B", // green
          thickness: 20,
          borderRadius: "50%",
        },
      ],
    },

    series: [
      {
        name: "Match",
        data: [match],
        tooltip: {
          valueSuffix: "%",
        },
        dataLabels: {
          format: "{y} %",
          borderWidth: 0,
          color: "#333333",
          style: {
            fontSize: "16px",
          },
        },
        dial: {
          radius: "80%",
          backgroundColor: "gray",
          baseWidth: 12,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "gray",
          radius: 6,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
