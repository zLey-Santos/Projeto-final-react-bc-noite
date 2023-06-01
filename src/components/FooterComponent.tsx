import { useState, useEffect } from "react";
import { ImagemComponent } from "./ImageComponent";

interface FooterProps {
  className: string;
}

export const Footer = ({ className }: FooterProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Atualiza a cada 1 segundo (1000ms)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div>
      <div
        className={` fixed w-screen bottom-0 py-4 text-sky-500 font-bold px-12 ${className}`}>
        <span>
          <ImagemComponent
            src={"/src/assets/clock/ampulheta-2.gif"}
            alt={"clock"}
            className={" w-6 h-6 mr-2"}
          />
        </span>
        {formattedTime} - {formattedDate}
      </div>
    </div>
  );
};
