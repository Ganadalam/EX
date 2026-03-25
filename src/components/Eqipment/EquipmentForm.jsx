import { useState } from "react";

const EQUIPMENT_TYPES = ["굴삭기", "로더", "불도저", "크레인", "덤프트럭"];
const PRESET_MODELS = {
  굴삭기: [
    "KOMATSU PC60",
    "KOMATSU PC200",
    "HYUNDAI R80",
    "HYUNDAI R140",
    "DOOSAN DX140",
  ],
  로더: ["KOMATSU WA200", "HYUNDAI HL760"],
  불도저: ["KOMATSU D65", "CATERPILLAR D6"],
  크레인: ["TADANO GR-300", "LIEBHERR LTM1030"],
  덤프트럭: ["HYUNDAI HD170", "DAEWOO NOVUS"],
};
const FUEL_PRESETS = {
  굴삭기: 85000,
  로더: 70000,
  불도저: 90000,
  크레인: 60000,
  덤프트럭: 100000,
};

const INIT = {
  name: "",
  type: "",
  model: "",
  year: new Date().getFullYear(),
  operator: "",
  rate: 0,
  baseFuelCostPerDay: 0,
  lastMaintenance: "",
  nextMaintenance: "",
};

export default function EquipmentForm({ addEquipment }) {
  const [form, setForm] = useState(INIT);
  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleTypeChange = (type) => {
    setForm((f) => ({
      ...f,
      type,
      baseFuelCostPerDay: FUEL_PRESETS[type] ?? 0,
      model: "",
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.type) return alert("장비명과 종류는 필수입니다.");
    addEquipment({ ...form, id: Date.now() });
    setForm(INIT);
  };

  return (
    <div>
      <h2>장비 등록</h2>

      <label>장비명</label>
      <input
        placeholder="예: 포크레인 06"
        value={form.name}
        onChange={(e) => set("name", e.target.value)}
      />

      <label>장비 종류</label>
      <select
        value={form.type}
        onChange={(e) => handleTypeChange(e.target.value)}
      >
        <option value="">선택</option>
        {EQUIPMENT_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label>모델명 (선택 또는 직접 입력)</label>
      <select value={form.model} onChange={(e) => set("model", e.target.value)}>
        <option value="">선택</option>
        {(PRESET_MODELS[form.type] ?? []).map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <input
        placeholder="직접 입력"
        value={form.model}
        onChange={(e) => set("model", e.target.value)}
      />

      <label>연식</label>
      <input
        type="number"
        value={form.year}
        onChange={(e) => set("year", Number(e.target.value))}
      />

      <label>운전원</label>
      <input
        placeholder="담당 운전원"
        value={form.operator}
        onChange={(e) => set("operator", e.target.value)}
      />

      <label>기본 시간 단가 (원)</label>
      <input
        type="number"
        value={form.rate}
        onChange={(e) => set("rate", Number(e.target.value))}
      />

      <label>일 유류비 기본값 (원)</label>
      <input
        type="number"
        value={form.baseFuelCostPerDay}
        onChange={(e) => set("baseFuelCostPerDay", Number(e.target.value))}
      />

      <label>마지막 정비일</label>
      <input
        type="date"
        value={form.lastMaintenance}
        onChange={(e) => set("lastMaintenance", e.target.value)}
      />

      <label>정비 예정일</label>
      <input
        type="date"
        value={form.nextMaintenance}
        onChange={(e) => set("nextMaintenance", e.target.value)}
      />

      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
