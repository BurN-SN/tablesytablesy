import { TabContent, TabNav } from "./components/PageLayout";
import { useZustand } from "./lib/state";
import "./styles.css";

export default function App() {
  const tabs = useZustand((state) => state.tabs);

  console.log(" === STATE === ", useZustand.getState());
  return (
    <div className="App">
      <TabNav />
      {tabs.length === 0 ? (
        <h1>Click the ( + ) button to get started.</h1>
      ) : (
        <TabContent />
      )}
    </div>
  );
}
