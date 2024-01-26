import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [btnHiglight, setBtnHighLight] = useState("");

  const buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "Women" },
    { id: 3, name: "Men" },
    { id: 4, name: "ByName" },
    { id: 5, name: "ByAge" },
  ];

  function handleFilterAndSort(event) {
    const id = event.target.id;
    setBtnHighLight(id);

    if (id == "btnAll") {
      console.log("all", users);
    }
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <div className="btn-container">
          {buttons.map((btn) => (
            <button
              id={"btn" + btn.name}
              onClick={handleFilterAndSort}
              className={`action-button ${
                btnHiglight === "btn" + btn.name
                  ? "action-button--highlight"
                  : ""
              }`}
              key={btn.id}
            >
              {btn.name}
            </button>
          ))}
        </div>
        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
