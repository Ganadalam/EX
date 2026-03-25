import WorkForm from "../components/work/WorkForm";
import WorkList from "../components/work/WorkList";
import useWork from "../hooks/useWork";

export default function WorkPage() {
  const { works, addWork } = useWork();

  return (
    <div>
      <h1>작업 관리</h1>
      <WorkForm addWork={addWork} />
      <WorkList works={works} />
    </div>
  );
}
