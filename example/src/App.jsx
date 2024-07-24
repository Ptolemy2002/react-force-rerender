import useForceRerender from "@ptolemy2002/react-force-rerender";

function App() {
  const forceRerender = useForceRerender();
  console.log("App rendered");
  
  return (
    <div className="App">
      <button onClick={forceRerender}>Force Rerender</button>
    </div>
  );
}

export default App;
