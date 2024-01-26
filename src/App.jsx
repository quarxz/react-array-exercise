import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  const [btnHiglight, setBtnHighLight] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  const buttonsFilter = [
    { id: 1, name: "all" },
    { id: 2, name: "women" },
    { id: 3, name: "men" },
  ];

  const buttonsSort = [
    { id: 4, name: "name" },
    { id: 5, name: "age" },
  ];

  const arr = [];
  function handleFilterAndSort(event) {
    const id = event.target.id;
    setBtnHighLight(id);
    // Fliter
    if (id === "all") {
      setFilter((prevfilter) => (prevfilter = "all"));
    }
    if (id === "women") {
      setFilter((prevfilter) => (prevfilter = "women"));
    }
    if (id === "men") {
      setFilter((prevfilter) => (prevfilter = "men"));
    }
    // Sort
    if (id === "name") {
      setSort((precSort) => (precSort = "name"));
    }
    if (id === "age") {
      setSort((precSort) => (precSort = "age"));
    }
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <div className="btn-container">
          {buttonsFilter.map((btn) => (
            <button
              id={btn.name}
              onClick={handleFilterAndSort}
              className={`action-button ${
                filter === btn.name ? "action-button--highlight" : ""
              }`}
              key={btn.id}
            >
              {btn.name.charAt(0).toUpperCase() + btn.name.slice(1)}
            </button>
          ))}
          {buttonsSort.map((btn) => (
            <button
              id={btn.name}
              onClick={handleFilterAndSort}
              className={`action-button ${
                sort === btn.name ? "action-button--highlight" : ""
              }`}
              key={btn.id}
            >
              {"By " + btn.name.charAt(0).toUpperCase() + btn.name.slice(1)}
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
