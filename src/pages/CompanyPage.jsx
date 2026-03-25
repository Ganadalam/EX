import CompanyForm from "../components/company/CompanyForm";
import CompanyList from "../components/company/CompanyList";
import useCompany from "../hooks/useCompany";

export default function CompanyPage() {
  const { companies, addCompany } = useCompany();

  return (
    <div>
      <h1>업체 관리</h1>
      <CompanyForm addCompany={addCompany} />
      <CompanyList companies={companies} />
    </div>
  );
}
