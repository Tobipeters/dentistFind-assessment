import { PracticeSummaryCard } from "./components";
import { practiceSummarys } from "./utils/mock-data";

function App() {
  return (
    <main className="container flex flex-col w-full gap-6 mx-auto p-5 lg:px-6 lg:py-8">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
        Practice Overview
      </h2>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {practiceSummarys.map((practice, id) => (
          <div key={id}>
            <PracticeSummaryCard practice={practice} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
