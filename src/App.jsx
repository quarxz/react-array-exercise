import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("name");

  const buttons = [
    { id: 1, name: "all", task: "filter" },
    { id: 2, name: "women", task: "filter" },
    { id: 3, name: "men", task: "filter" },
    { id: 4, name: "name", task: "sort" },
    { id: 5, name: "age", task: "sort" },
  ];

  function handleFilterAndSort(event) {
    const id = event.target.id;
    // Filter
    if (id === "all" || id === "women" || id === "men") {
      setFilter((prevFilter) => (prevFilter = id));
    }
    // Sort
    if (id === "name" || id === "age") {
      setSort((prevSort) => (prevSort = id));
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
              id={btn.name}
              onClick={handleFilterAndSort}
              className={`action-button ${
                (btn.task === "filter" ? filter : sort) === btn.name
                  ? "action-button--highlight"
                  : ""
              }`}
              key={btn.id}
            >
              {btn.name.charAt(0).toUpperCase() + btn.name.slice(1)}
            </button>
          ))}
        </div>
        <section className="card-list">
          {users
            .filter((user) => {
              if (filter === "all") {
                return true;
              }
              if (filter === "women" && user.gender === "female") {
                return true;
              }
              if (filter === "men" && user.gender === "male") {
                return true;
              }
              return false;
            })
            .slice()
            .sort((a, b) => {
              if (sort === "age") {
                return a.dob.age - b.dob.age;
              }
              if (sort === "name") {
                return a.name.last.localeCompare(b.name.last);
              }
            })
            .map((user) => {
              return <Card key={user.email} user={user} />;
            })}
        </section>
      </main>
    </>
  );
}

export default App;
