import {
  TableActions,
  PageHeader,
} from "@/components/backoffice";

export default function Farmer() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Farmers"
        linkTitle="Add Farmer"
        href="/dashboard/farmers/new"
      />
      {/* Tables Action */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">
        <h2>Farmers</h2>
      </div>
    </div>
  );
}
