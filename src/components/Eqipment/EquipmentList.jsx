export default function EquipmentList({ equipments }) {
  if (!equipments.length) return <p>등록된 장비가 없습니다.</p>;

  return (
    <div>
      <h3>장비 목록</h3>
      {equipments.map((e) => (
        <div
          key={e.id}
          style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }}
        >
          <div>
            🚜 {e.name} ({e.type})
          </div>
          <div>
            모델: {e.model} / {e.year}년식
          </div>
          <div>운전원: {e.operator}</div>
          <div>
            단가: {e.rate.toLocaleString()}원 / 유류비:{" "}
            {e.baseFuelCostPerDay.toLocaleString()}원
          </div>
          <div>
            마지막 정비: {e.lastMaintenance} / 예정: {e.nextMaintenance}
          </div>
        </div>
      ))}
    </div>
  );
}
