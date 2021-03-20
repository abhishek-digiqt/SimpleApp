import React from "react";
import axios from "axios";

const HomePage = () => {
  const [apiState, setAPIState] = React.useState("Initial API State");

  const makeAPICall = async () => {
    const res = await axios.get(process.env.REACT_APP_API_ENDPOINT);
    if (res.status === 200) {
      await setAPIState(
        `Successfully called the API ${parseFloat(Math.random()).toFixed(
          2
        )}  got ${Object.keys(res.data).length}`
      );
    }
  };
  return (
    <div className="row">
      <div className="col-4" />
      <div className="col-md-3">
        <button
          type="button"
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
