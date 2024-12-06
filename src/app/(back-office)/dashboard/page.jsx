import { Heading, LargeCards, SmallCards } from "@/components/backoffice";

export default function page() {
    return (
        <div>
            <Heading title="Dashboard OverView" />
            {/* Large Card */}
            <LargeCards />
            {/* Small Card */}
            <SmallCards />
            {/* Charts */}
            {/* Recent Orders Table */}
        </div>
    )
};
