import {
    TableActions,
    PageHeader,
  } from "@/components/backoffice";
  
  export default function Coupons() {
    return (
      <div>
        {/* Header */}
        <PageHeader
          heading="Coupons"
          linkTitle="Add Coupons"
          href="/dashboard/coupons/new"
        />
        {/* Tables Action */}
        {/* Export || Search || Bulk Delete */}
        <TableActions />
        <div className="py-8">
          <h2>Coupons</h2>
        </div>
      </div>
    );
  }
  