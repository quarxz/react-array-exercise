import styles from "./ButtonBar.module.css";
import { useState } from "react";

export function ButtonBar() {
  let [btnHiglight, setBtnHighLight] = useState("");
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
      console.log("all");
    }
  }
  return (
    <>
      <div className={styles["btn-comtainer"]}>
        {buttons.map((btn) => (
          <button
            id={"btn" + btn.name}
            onClick={handleFilterAndSort}
            style={{
              borderColor:
                btnHiglight === "btn" + btn.name ? "salmon" : undefined,
            }}
            key={btn.id}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </>
  );
}
