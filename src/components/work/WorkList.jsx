import { useState } from "react";
import { equipments } from "../../data/equipmentData";
import { companies } from "../../data/companyData";

export default function WorkList({ works }) {
  const [filter, setFilter] = useState("all");

  const getCompany = (id) => companies.find((c) => c.id == id);
  const getEquipment = (id) => equipments.find((e) => e.id == id);

  const getCalculation = (w) => {
    return `${w.workHours}h × ${w.rate} + ${w.overtimeHours}h × ${w.overtimeRate} + ${w.extraCost}`;
  };
  const getTotalCost = (w) => {
    return (
      Number(w.workHours) * Number(w.rate) +
      Number(w.overtimeHours) * Number(w.overtimeRate) +
      Number(w.extraCost)
    );
  };
  const filteredWorks = works.filter((w) => {
    const today = new Date();
    const d = new Date(w.date);

    if (filter === "day") {
      return d.toDateString() === today.toDateString();
    }

    if (filter === "month") {
      return (
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear()
      );
    }

    return true;
  });

  return (
    <div>
      <h3>작업 목록</h3>

      {/* 필터 */}
      <div>
        <button onClick={() => setFilter("all")}>전체</button>
        <button onClick={() => setFilter("day")}>오늘</button>
        <button onClick={() => setFilter("month")}>이번달</button>
      </div>

      {/* 리스트 */}
      {filteredWorks.map((w) => {
        const company = getCompany(w.companyId);
        const equipment = getEquipment(w.equipmentId);

        return (
          <div
            key={w.id}
            style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
          >
            <div>📅 {w.date}</div>
            <div>🏢 {company?.name}</div>
            <div>🚜 {equipment?.name}</div>

            <div>🧮 {getCalculation(w)}</div>

            <div>💰 {getTotalCost(w)}원</div>
          </div>
        );
      })}
    </div>
  );
}
