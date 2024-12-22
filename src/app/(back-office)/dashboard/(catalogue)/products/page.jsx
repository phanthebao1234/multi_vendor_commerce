import {
  TableActions,
  PageHeader,
} from "@/components/backoffice";

export default function Product() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />
      {/* Tables Action */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-8">
        <h2>Products</h2>
      </div>
    </div>
  );
}
