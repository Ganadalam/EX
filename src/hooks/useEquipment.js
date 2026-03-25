import { useState } from "react";
import { equipments as initialEquipments } from "../data/equipmentData";

export default function useEquipment() {
  const [equipments, setEquipments] = useState(initialEquipments);

  const addEquipment = (eq) => setEquipments((prev) => [...prev, eq]);
  const updateEquipment = (updated) =>
    setEquipments((prev) =>
      prev.map((e) => (e.id === updated.id ? updated : e)),
    );

  return { equipments, addEquipment, updateEquipment };
}
