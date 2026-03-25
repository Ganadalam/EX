import { useState } from "react";
import { equipments } from "../../data/equipmentData";
import { companies } from "../../data/companyData";

export default function WorkForm({ addWork }) {
  const [form, setForm] = useState({
    date: "",
    companyId: "",
    equipmentId: "",
    workHours: 0,
    overtimeHours: 0,
    extraCost: 0,
  });

  const handleSubmit = () => {
    const equipment = equipments.find((e) => e.id == form.equipmentId);
    const rate = equipment.rate;
    const overtimeRate = rate * 1.5;

    addWork({
      ...form,
      id: Date.now(),
      rate,
      overtimeRate,
      totalCost:
        form.workHours * rate +
        form.overtimeHours * overtimeRate +
        Number(form.extraCost),
    });
  };

  return (
    <div>
      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, companyId: e.target.value })}>
        <option>업체 선택</option>
        {companies.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setForm({ ...form, equipmentId: e.target.value })}
      >
        <option>장비 선택</option>
        {equipments.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="작업 시간"
        onChange={(e) => setForm({ ...form, workHours: e.target.value })}
      />

      <input
        type="number"
        placeholder="초과 시간"
        onChange={(e) => setForm({ ...form, overtimeHours: e.target.value })}
      />

      <input
        type="number"
        placeholder="추가 비용"
        onChange={(e) => setForm({ ...form, extraCost: e.target.value })}
      />

      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}
