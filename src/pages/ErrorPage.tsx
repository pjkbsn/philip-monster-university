import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Oops! Something went wrong.</p>

      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
