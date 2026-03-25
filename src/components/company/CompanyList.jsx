export default function CompanyList({ companies }) {
  if (!companies.length) return <p>등록된 업체가 없습니다.</p>;

  return (
    <div>
      <h3>업체 목록</h3>
      {companies.map((c) => (
        <div
          key={c.id}
          style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
        >
          <div>🏢 {c.name}</div>
          {c.contact && <div>📞 {c.contact}</div>}
          {c.manager && <div>👤 {c.manager}</div>}
          {c.contractStart && <div>📅 계약 시작: {c.contractStart}</div>}
          {c.mainContract && <div>📋 {c.mainContract}</div>}
        </div>
      ))}
    </div>
  );
}
