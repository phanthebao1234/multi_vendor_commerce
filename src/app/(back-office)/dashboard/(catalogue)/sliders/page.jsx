import {
    TableActions,
    PageHeader,
  } from "@/components/backoffice";
  
  export default function Slider() {
    return (
      <div>
        {/* Header */}
        <PageHeader
          heading="Slider"
          linkTitle="Add Slider"
          href="/dashboard/sliders/new"
        />
        {/* Tables Action */}
        {/* Export || Search || Bulk Delete */}
        <TableActions />
        <div className="py-8">
          <h2>Sliders</h2>
        </div>
      </div>
    );
  }
  