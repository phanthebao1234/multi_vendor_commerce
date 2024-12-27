import {
    TableActions,
    PageHeader,
  } from "@/components/backoffice";
  
  export default function Staff() {
    return (
      <div>
        {/* Header */}
        <PageHeader
          heading="Staff"
          linkTitle="Add Staff"
          href="/dashboard/staff/new"
        />
        {/* Tables Action */}
        {/* Export || Search || Bulk Delete */}
        <TableActions />
        <div className="py-8">
          <h2>Staff</h2>
        </div>
      </div>
    );
  }
  