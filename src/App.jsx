import { useState } from "react";
import WorkPage from "./pages/WorkPage";
import EquipmentPage from "./pages/EquipmentPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  const [page, setPage] = useState("work");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("work")}>작업</button>
        <button onClick={() => setPage("equipment")}>장비</button>
        <button onClick={() => setPage("company")}>업체</button>
      </nav>

      {page === "work" && <WorkPage />}
      {page === "equipment" && <EquipmentPage />}
      {page === "company" && <CompanyPage />}
    </div>
  );
}

export default App;
