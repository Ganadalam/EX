import { useState } from "react";

const INIT = {
  name: "",
  contact: "",
  manager: "",
  contractStart: "",
  mainContract: "",
};

export default function CompanyForm({ addCompany }) {
  const [form, setForm] = useState(INIT);
  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = () => {
    if (!form.name) return alert("업체명은 필수입니다.");
    addCompany({ ...form, id: Date.now() });
    setForm(INIT);
  };

  return (
    <div>
      <h2>업체 등록</h2>

      <label>업체명 *</label>
      <input
        placeholder="예: A건설"
        value={form.name}
        onChange={(e) => set("name", e.target.value)}
      />

      <label>연락처</label>
      <input
        placeholder="010-0000-0000"
        value={form.contact}
        onChange={(e) => set("contact", e.target.value)}
      />

      <label>담당자</label>
      <input
        placeholder="담당자명"
        value={form.manager}
        onChange={(e) => set("manager", e.target.value)}
      />

      <label>계약 시작일</label>
      <input
        type="date"
        value={form.contractStart}
        onChange={(e) => set("contractStart", e.target.value)}
      />

      <label>주 계약 건</label>
      <input
        placeholder="예: 토목 공사"
        value={form.mainContract}
        onChange={(e) => set("mainContract", e.target.value)}
      />

      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
