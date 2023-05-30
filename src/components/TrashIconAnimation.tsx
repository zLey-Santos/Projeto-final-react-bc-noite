import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export const TrashIconAnimation: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Tempo de duração da animação em milissegundos (2 segundos neste caso)
  };

  return (
    <div className="relative  ">
      <div
        className={`transform transition-transform ${
          isAnimating ? "rotate-12" : ""
        }`}
        style={{ transformOrigin: "bottom" }}>
        <MdDeleteForever
          as
          FaTrash
          className="w-6 h-6 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      {isAnimating && (
        <div className="">
          <span className="text-center uppercase justify-center items-center py-1 text-xs">
            delete
          </span>
        </div>
      )}
    </div>
  );
};
