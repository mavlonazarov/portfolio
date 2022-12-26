import React from "react";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Preloader = () => {
  const [loading, setLoading] = useState(false);
  // const [color, setColor] = useState("");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader
          color={"#252525"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default Preloader;
