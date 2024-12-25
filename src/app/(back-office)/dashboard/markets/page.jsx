import {
    TableActions,
    PageHeader,
  } from "@/components/backoffice";
  
  export default function Market() {
    return (
      <div>
        {/* Header */}
        <PageHeader
          heading="Markets"
          linkTitle="Add Market"
          href="/dashboard/market/new"
        />
        {/* Tables Action */}
        {/* Export || Search || Bulk Delete */}
        <TableActions />
        <div className="py-8">
          <h2>Markets</h2>
        </div>
      </div>
    );
  }
  