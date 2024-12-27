import {
  TableActions,
  PageHeader,
} from "@/components/backoffice";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Limi Community Trainings"
        linkTitle="Add Training"
        href="/dashboard/community/new"
      />
      {/* Tables Action */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">
        <h2>Community</h2>
      </div>
    </div>
  );
}
