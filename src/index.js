import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";
import "./styles.css";
class App extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/wpfnfmh7/";
  // componentDidMount() {
  //   setInterval(() => this.forceUpdate(), 1000);
  //   }
  render() {
    var data = [
      {
        Month: "Jan",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "Feb",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8400
      },
      {
        Month: "March",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "April",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "May",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      },
      {
        Month: "June",
        BTC: Math.floor(Math.random() * 500),
        ETH: Math.floor(Math.random() * 500),
        amt: 8000
      }
    ];
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="March" stroke="red" label="Max values" />
        <ReferenceLine y={474} label="Max" stroke="red" />
        <Line type="monotone" dataKey="BTC" stroke="#8884d8" />
        <Line type="monotone" dataKey="ETH" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
