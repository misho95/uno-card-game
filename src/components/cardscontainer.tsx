const CardContainer = ({ children }) => {
  return (
    <div
      className="relative"
      style={{
        width: `${children.length > 0 ? children.length * 73 : 160}px`,
      }}
    >
      {children.length > 0
        ? children.map((child, index) => (
            <div
              key={index}
              className={`rounded-lg `}
              style={{
                position: "absolute",
                top: `${0}px`, // Adjust the spacing between cards
                left: `${index * (60 - children.length)}px`, // Adjust the spacing between cards
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

export default CardContainer;
