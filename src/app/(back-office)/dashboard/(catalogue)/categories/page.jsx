import {
  TableActions,
  PageHeader,
} from "@/components/backoffice";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Category"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
      {/* Tables Action */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">
        <h2>Categories</h2>
      </div>
    </div>
  );
}
