import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className=" text-4xl font-bold bg-gray-100 w-[936]">2024, May</h1>
      <Calendar />
    </div>
  );
};

export default App;
