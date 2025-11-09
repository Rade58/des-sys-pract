import { SillyButton as Button } from "./components/silly_button/SillyButton";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Practicing Design Systems
      </h1>
      <p className="text-base">Šta se radi u ovoj dolini?</p>
      <div className="p-6">
        <Button variant="primary" size="medium">
          Press
        </Button>
      </div>
    </>
  );
}

export default App;
