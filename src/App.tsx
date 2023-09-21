import Card from "./components/card";
import CardContainer from "./components/cardscontainer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="w-w1110 h-h768 bg-neutral-400 relative rounded-lg">
          {/* //player */}
          <div className="absolute bottom-0 w-full h-60 px-6 mb-3 flex justify-center">
            <CardContainer>
              <Card
                value={3}
                bg={"bg-yellow-500"}
                text={"text-yellow-500"}
                hidden={false}
              />
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
