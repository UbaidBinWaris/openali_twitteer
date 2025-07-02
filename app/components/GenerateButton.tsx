import React from "react";
import { useNavigate } from "react-router-dom";

interface GenerateButtonProps {
  to: string; // Path to navigate to
  name: string;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ to, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-violet-700 text-white rounded-full hover:bg-gray-800 py-4 px-7 mb-5 transition duration-300 transform hover:scale-105"
      >
        {name}
      </button>
    </div>
  );
};

export default GenerateButton;
