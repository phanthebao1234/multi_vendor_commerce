import {
    TableActions,
    PageHeader,
  } from "@/components/backoffice";
export default function page() {
    return (
        <div>
          {/* Header */}
          <PageHeader
            heading="Banner"
            linkTitle="Add Banner"
            href="/dashboard/banners/new"
          />
          {/* Tables Action */}
          {/* Export || Search || Bulk Delete */}
          <TableActions />
          <div className="py-8">
            <h2>Banners</h2>
          </div>
        </div>
      );
};
