import React from "react";
import NotFoundImage from "../assets/img-erro-404/erro-404.jpg";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-60 w-auto rounded-xl ">
      <img
        className=" rounded-xl justtify-center items-center"
        src={NotFoundImage}
        alt="Error 404 - Not Found Page"
      />
    </div>
  );
};
