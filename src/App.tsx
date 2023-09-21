import Card from "./components/card";
import CardContainer from "./components/cardscontainer";
import background from "./assets/wood-table.avif";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
        <div
          className={`w-w1110 h-h768 relative rounded-lg border-px1 border-white`}
          style={{ background: `url(${background})` }}
        >
          {/* //player */}
          <div className="absolute bottom-0 w-full h-44 px-6 mb-3 flex justify-center">
            <CardContainer rotate={""}>
              <Card
                value={1}
                bg={"bg-red-500"}
                text={"text-red-500"}
                hidden={false}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={false}
              />
              <Card
                value={3}
                bg={"bg-blue-500"}
                text={"text-blue-500"}
                hidden={false}
              />
            </CardContainer>
          </div>
          {/* //CPU 1 */}
          <div className="absolute left-0 w-44 h-full mx-6 mb-3 flex justify-center items-center">
            <CardContainer rotate={"rotate-90"}>
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
            </CardContainer>
          </div>
          {/* //CPU 2 */}
          <div className="absolute left-0 w-full h-44 mx-6 my-3 flex justify-center items-center">
            <CardContainer rotate={"rotate-180"}>
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
            </CardContainer>
          </div>
          {/* //CPU 1 */}
          <div className="absolute right-0 w-44 h-full mx-6 mb-3 flex justify-center items-center">
            <CardContainer rotate={"-rotate-90"}>
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={true}
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
