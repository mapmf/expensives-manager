import React, { useState } from "react";
import ListExpensives from "./pages/ListExpensives";
import AddExpensive from "./pages/AddExpensive";
import "./styles.css";

export default function App() {
  const [expensiveList, setExpensiveList] = useState([]);

  const [showAddPage, setShowAddPage] = useState(false);

  const handleAddClick = expensive => {
    let _expensiveList = [...expensiveList, expensive];
    setExpensiveList(_expensiveList);
    setShowAddPage(false);
  };

  const handleCancelClick = () => {
    setShowAddPage(false);
  };

  return (
    <div className="App">
      {showAddPage && (
        <AddExpensive
          handleAddClick={handleAddClick}
          handleCancelClick={handleCancelClick}
        />
      )}

      {!showAddPage && (
        <ListExpensives
          expensiveList={expensiveList}
          setShowAddPage={setShowAddPage}
        />
      )}
    </div>
  );
}
