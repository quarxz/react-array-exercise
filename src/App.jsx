import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  let [btnHiglight, setBtnHighLight] = useState("");

  function handleFilterAndSort(event) {
    const id = event.target.id;
    setBtnHighLight(id);
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <div className="btn-container">
          <button
            id="btnAll"
            style={{
              borderColor: btnHiglight === "btnAll" ? "salmon" : undefined,
            }}
            onClick={handleFilterAndSort}
          >
            All
          </button>
          <button
            id="btnWomen"
            style={{
              borderColor: btnHiglight === "btnWomen" ? "salmon" : undefined,
            }}
            onClick={handleFilterAndSort}
          >
            Women
          </button>
          <button
            id="btnMen"
            style={{
              borderColor: btnHiglight === "btnMen" ? "salmon" : undefined,
            }}
            onClick={handleFilterAndSort}
          >
            Men
          </button>
          <button
            id="btnByName"
            style={{
              borderColor: btnHiglight === "btnByName" ? "salmon" : undefined,
            }}
            onClick={handleFilterAndSort}
          >
            By name
          </button>
          <button
            id="btnByAge"
            style={{
              borderColor: btnHiglight === "btnByAge" ? "salmon" : undefined,
            }}
            onClick={handleFilterAndSort}
          >
            By age
          </button>
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
