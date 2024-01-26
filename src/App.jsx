import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { ButtonBar } from "./components/ButtonBar";

function App() {
  return (
    <>
      <header>
        <h1>Array function magic</h1>
      </header>
      <main>
        <ButtonBar />
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
