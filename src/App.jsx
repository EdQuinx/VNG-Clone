import Header from "./layouts/header";
import Main from "./layouts/main";
function App() {
  return (
    <>
      {
        //<div className="bg-transparent fixed z-[1501] h-screen w-screen"></div>
      }
      <main className="body-wrapper">
        <Header />
        <Main />
      </main>
    </>
  );
}

export default App;
