import React from "react";
import axios from "axios";

const HomePage = () => {
  const [apiState, setAPIState] = React.useState("Initial API State");

  const makeAPICall = () => {
    console.log("API Call");
  };
  return (
    <div className="row">
      <div className="col-4" />
      <div className="col-md-3">
        <button
          onClick={() => makeAPICall()}
          className="btn btn-outline-primary ml-4"
        >
          Make an API call here
        </button>
        <p className="ml-4 mt-2">{apiState}</p>
      </div>
      <div className="col-4" />
    </div>
  );
};

export default HomePage;
