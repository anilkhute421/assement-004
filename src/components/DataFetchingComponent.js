import React, { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setData(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>; // Show loader when data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an error
  }

  return (
    <div>
      <h1>Data List</h1>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.title}
            <br />
            <strong>Description:</strong> {item.body}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DataFetchingComponent;
