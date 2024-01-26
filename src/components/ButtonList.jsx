import styles from "./ButtonList.module.css";
import { useState } from "react";

export function ButtonList() {
  let [btnHiglight, setBtnHighLight] = useState("");

  // const buttons = ["all", "women", "byName", "byAge"];

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
    </>
  );
}
