export default function WorkList({ works }) {
  return (
    <div>
      {works.map((w) => (
        <div key={w.id}>
          {w.date} | {w.totalCost}원
        </div>
      ))}
    </div>
  );
}
