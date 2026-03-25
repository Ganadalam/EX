import { useState } from "react";
import { companies as initialCompanies } from "../data/companyData";

export default function useCompany() {
  const [companies, setCompanies] = useState(initialCompanies);

  const addCompany = (c) => setCompanies((prev) => [...prev, c]);
  const updateCompany = (updated) =>
    setCompanies((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c)),
    );

  return { companies, addCompany, updateCompany };
}
