import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="p-6 flex flex-col items-center space-y-4">
        <Profile name="Oduor Rooney Opondo" email="lilney205@gmail.com" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
