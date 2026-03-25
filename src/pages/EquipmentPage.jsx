import EquipmentForm from "../components/Equipment/EquipmentForm";
import EquipmentList from "../components/Equipment/EquipmentList";
import useEquipment from "../hooks/useEquipment";

export default function EquipmentPage() {
  const { equipments, addEquipment } = useEquipment();

  return (
    <div>
      <h1>장비 관리</h1>
      <EquipmentForm addEquipment={addEquipment} />
      <EquipmentList equipments={equipments} />
    </div>
  );
}
