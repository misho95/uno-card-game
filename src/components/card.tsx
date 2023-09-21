const Card = ({ value, bg, text, hidden }) => {
  return (
    <div
      className={`w-32 h-44 bg-white rounded-lg p-3 shadow-md ${
        !hidden ? "hover:-translate-y-5" : ""
      } cursor-pointer duration-50`}
    >
      {hidden && (
        <div className={`w-full h-full bg-black rounded-lg relative`}>
          <div className="bg-red-500 w-full h-18 rounded-half -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div
              className={` text-4xl text-yellow-500 drop-shadow-customText font-bold select-none outline-1 outline-white`}
            >
              UNO
            </div>
          </div>
        </div>
      )}
      {!hidden && (
        <div className={`w-full h-full ${bg} rounded-lg relative`}>
          <div className="absolute top-1 left-1 text-3xl text-white select-none">
            {value}
          </div>
          <div className="bg-white w-full h-18 rounded-half -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className={`rotate-45 text-6xl ${text} select-none`}>
              {value}
            </div>
          </div>
          <div className="absolute bottom-1 right-1 text-3xl text-white select-none">
            {value}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
