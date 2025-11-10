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

      <div className="p-6">
        <p className="bg-primary-600 text-black p-8 border-2 border-accent-900">
          This is some themed paragraph (default Tailwind colors arent allowed)
        </p>
        <p className="text-4xl bolder text-secondary-900 p-4">I'm Rade</p>
      </div>
    </>
  );
}

export default App;
