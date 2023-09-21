const CardContainer = ({ children, rotate }) => {
  return (
    <div
      className={`relative ${rotate} h-44`}
      style={{
        width: `${children.length > 0 ? children.length * 73 : 150}px`,
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
                left: `${index * (60 - children.length)}px`, // Adjust the spacing between card
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
