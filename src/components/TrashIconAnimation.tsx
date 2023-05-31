import React, { useState } from "react";
import { MdDeleteForever as FaTrash } from "react-icons/md";

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
        className={` transform transition-transform flex items-center justify-center ${
          isAnimating ? "rotate-45" : ""
        }`}
        style={{ transformOrigin: "top " }}>
        <FaTrash className="w-5 h-8 cursor-pointer " onClick={handleClick} />
      </div>
      {isAnimating && (
        <div className="">
          <span className="text-center uppercase text-xs">delete</span>
        </div>
      )}
    </div>
  );
};
