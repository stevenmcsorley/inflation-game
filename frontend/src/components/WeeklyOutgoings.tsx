// components/WeeklyOutgoings.tsx

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine,
  SparklinesBars,
} from "react-sparklines";

// Define the type for your outgoings data if you have a predefined structure
// Otherwise, use a more generic type like Record<string, any>
interface Outgoings {
  weekly_housing: string;
  weekly_transport: string;
  weekly_food: string;
  weekly_utilities: string;
  weekly_recreation: string;
  weekly_restaurants: string;
  weekly_household: string;
  weekly_council_tax: string;
  weekly_communications: string;
  weekly_insurance: string;
  weekly_other: string;
  [key: string]: string; // Use an index signature for dynamic keys
}

const socket = io("http://localhost:3000");

const WeeklyOutgoings = () => {
  const [outgoings, setOutgoings] = useState<Outgoings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [filter, setFilter] = useState<string>("weekly_"); // Default filter
  const [economicFactors, setEconomicFactors] = useState<any>(null);
  const [prevOutgoings, setPrevOutgoings] = useState<Outgoings | null>(null);
  const [outgoingsHistory, setOutgoingsHistory] = useState<
    Record<string, number[]>
  >({});
  const [alertsMessage, setAlertsMessage] = useState<string>("");

  useEffect(() => {
    socket.on("economicFactorsAlerts", (message: string) => {
      setAlertsMessage(message);
    });

    // Cleanup when the component unmounts
    return () => {
      socket.off("economicFactorsAlerts");
    };
  }, []);

  useEffect(() => {
    if (outgoings) {
      const newHistory = { ...outgoingsHistory };
      Object.keys(outgoings).forEach((key) => {
        const value = parseFloat(outgoings[key]);
        if (newHistory[key]) {
          newHistory[key].push(value);
        } else {
          newHistory[key] = [value];
        }
      });
      setOutgoingsHistory(newHistory);
    }
  }, [outgoings]);

  useEffect(() => {
    if (economicFactors && outgoings) {
      setPrevOutgoings(outgoings);
      const updatedOutgoings = { ...outgoings };
      for (let category in updatedOutgoings) {
        if (category.startsWith("weekly_")) {
          for (let factorGroup in economicFactors) {
            for (let factor in economicFactors[factorGroup]) {
              console.log("factor", factor);
              if (economicFactors[factorGroup][factor]["affects"][category]) {
                let change = parseFloat(
                  economicFactors[factorGroup][factor]["affects"][category]
                );
                let originalValue = parseFloat(updatedOutgoings[category]);
                let newValue = originalValue + (originalValue * change) / 100;
                updatedOutgoings[category] = newValue.toFixed(2);

                // Calculate the corresponding monthly and annual values
                const monthlyKey = category.replace("weekly_", "monthly_");
                const annualKey = category.replace("weekly_", "annual_");
                updatedOutgoings[monthlyKey] = (newValue * 4).toFixed(2); // Assuming 4 weeks in a month
                updatedOutgoings[annualKey] = (newValue * 52).toFixed(2); // Assuming 52 weeks in a year
              }
            }
          }
        }
      }
      setOutgoings(updatedOutgoings);
    }
  }, [economicFactors]);

  useEffect(() => {
    socket.on("economicFactorsUpdate", (data) => {
      console.log("Received economic factors data:", data); // Log the data from the server
      setEconomicFactors(data);
    });

    // Cleanup when the component unmounts
    return () => {
      socket.off("economicFactorsUpdate");
    };
  }, []);

  useEffect(() => {
    const fetchOutgoings = async () => {
      try {
        const backendOutgoingsEndpoint =
          "http://localhost:3000/weekly-outgoings";

        // Send a GET request to your Node.js Express backend
        const response = await axios.get(backendOutgoingsEndpoint, {
          withCredentials: true,
        });
        setOutgoings(response.data as Outgoings);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch outgoings");
        setLoading(false);
      }
    };

    fetchOutgoings();
  }, []);

  const getChangeDirection = (current: string, previous?: string) => {
    const currentValue = parseFloat(current);
    // If previous is not provided, we cannot determine the change direction
    if (previous === undefined) {
      return "no change";
    }
    const previousValue = parseFloat(previous);
    if (currentValue > previousValue) {
      return "up";
    } else if (currentValue < previousValue) {
      return "down";
    }
    return "no change";
  };

  const getPercentageChange = (current: string, previous: string) => {
    const currentValue = parseFloat(current);
    const previousValue = parseFloat(previous);
    const percentageChange =
      ((currentValue - previousValue) / previousValue) * 100;
    return percentageChange.toFixed(2);
  };

  if (loading) return <p>Loading outgoings...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredOutgoings = outgoings
    ? Object.entries(outgoings).filter(([key]) => key.startsWith(filter))
    : [];

  const totalOutgoings = filteredOutgoings.reduce((total, [key, value]) => {
    return total + parseFloat(value);
  }, 0);

  return (
    <div className="container mx-auto my-8 p-6 bg-neutral-900 shadow-2xl rounded-2xl transition">
      {/* Alerts message display */}
      {alertsMessage && (
        <div
          className="alerts-message bg-cyan-100 border-l-4 border-cyan-800 text-cyan-700 p-2 mb-2"
          role="alert"
        >
          {/* <p className="font-bold">Alert</p> */}
          <p>{alertsMessage}</p>
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-teal-300">Outgoings</h2>
        <div className="relative">
          <select
            className="appearance-none w-full bg-slate-700 border border-gray-500 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-slate-600 focus:border-teal-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="weekly_">Weekly</option>
            <option value="monthly_">Monthly</option>
            <option value="annual_">Annual</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg
              className="fill-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548c0.436 0.446 1.043 0.481 1.576 0l4.908-4.908c0.533-0.533 0.928-1.197 0.928-1.93C12.928 0.825 12.103 0 11.097 0H1.922C0.917 0 0.091 0.825 0.091 1.831c0 0.733 0.394 1.397 0.928 1.93l4.908 4.908c0.533 0.481 1.14 0.446 1.576 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredOutgoings.map(([key, value]) => (
          <div
            key={key}
            className={`p-3 bg-gradient-to-br from-zinc-800 to-black-900 rounded-xl shadow-lg ${
              getChangeDirection(value, prevOutgoings?.[key]) === "up"
                ? "ring-1 ring-green-500"
                : getChangeDirection(value, prevOutgoings?.[key]) === "down"
                ? "ring-1 ring-red-500"
                : "ring-1 ring-gray-600"
            }`}
          >
            <div className="flex items-center mb-2">
              <div className="flex-auto col-auto">
                <span className="block text-md text-teal-300 font-semibold capitalize">
                  {key.replace(filter, "").replace(/_/g, " ")}
                </span>
                <span className="block text-2xl text-teal-200 font-semibold">
                  £ {parseFloat(value).toFixed(2)}
                </span>
              </div>
              <div className="flex-auto">
                <p
                  className={`text-lg font-medium text-center ${
                    getChangeDirection(value, prevOutgoings?.[key]) === "up"
                      ? "text-green-400"
                      : getChangeDirection(value, prevOutgoings?.[key]) ===
                        "down"
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {getChangeDirection(value, prevOutgoings?.[key]) === "up"
                    ? `↑ ${getPercentageChange(
                        value,
                        prevOutgoings?.[key] ?? value
                      )}%`
                    : getChangeDirection(value, prevOutgoings?.[key]) === "down"
                    ? `↓ ${getPercentageChange(
                        value,
                        prevOutgoings?.[key] ?? value
                      )}%`
                    : "No change -"}
                </p>
                <p className="block text-xs text-center text-gray-400">
                  Previous: £{" "}
                  {parseFloat(prevOutgoings?.[key] || "0").toFixed(2)}
                </p>
              </div>
            </div>
            {outgoingsHistory[key] && (
              <Sparklines data={outgoingsHistory[key]} limit={7} height={30}>
                <SparklinesLine color="#93c5fd" style={{ fill: "#f8fafc" }} />
                <SparklinesSpots />
              </Sparklines>
            )}
          </div>
        ))}
        <div className="col-span-full p-5 bg-gradient-to-br from-zinc-800 to-gray-900 rounded-xl shadow-xl">
          <span className="block text-lg text-teal-400 font-semibold">
            Total {filter.replace(/_/g, "")} Outgoings
          </span>
          <span className="block text-3xl text-teal-200 font-bold">
            £ {totalOutgoings.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOutgoings;

// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";

// // This should be outside of your component
// const socket = io("http://localhost:3000");

// const WeeklyOutgoings = () => {
//   // Use state to store the received data
//   const [dynamicData, setDynamicData] = useState<any>(null);
//   const [economicFactors, setEconomicFactors] = useState<any>(null);

//   useEffect(() => {
//     socket.on("economicFactorsUpdate", (data) => {
//       setEconomicFactors(data);
//     });

//     // Cleanup when the component unmounts
//     return () => {
//       socket.off("economicFactorsUpdate");
//     };
//   }, []);

//   useEffect(() => {
//     // Listen for the 'dynamicData' event from the server
//     socket.on("dynamicData", (data: any) => {
//       console.log("Received dynamic data:", data); // Log the data from the server
//       setDynamicData(data); // Update state with the received data
//     });

//     // Clean up the event listener when the component unmounts
//     return () => {
//       socket.off("dynamicData");
//     };
//   }, []);

//   if (!dynamicData) {
//     return <p>Loading data...</p>; // or any other loading indicator
//   }

//   return (
//     <div>
//       <h2>Dynamic Data Received:</h2>
//       <p>{dynamicData.timestamp}</p>
//       <p>{dynamicData.randomValue}</p>
//       <div>
//       {/* Render the economic factors data */}
//       {JSON.stringify(economicFactors, null, 2)}
//     </div>
//     </div>
//   );
// };

// export default WeeklyOutgoings;
