import { useEffect, useState } from "react";
import Item from "./components/Item/Item";
import "./app.css";

function App() {
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState(false);
  // console.log(data);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="btns">
          <button
            onClick={() => {
              setFiltering(false);
            }}
            className={filtering ? "" : "active"}
          >
            All Products
          </button>
          <button
            onClick={() => {
              setFiltering(true);
            }}
            className={filtering ? "active" : ""}
          >
            Available Now
          </button>
        </div>
      </div>
      <div className="item-container">
        {filtering
          ? data
              .filter((x) => x.available === true)
              .map((item) => {
                return <Item key={item.id} item={item} />;
              })
          : data.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
      </div>
    </div>
  );
}

export default App;
