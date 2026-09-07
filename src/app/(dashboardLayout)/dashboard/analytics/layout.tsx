import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({children} : {children:React.ReactNode}) {
  return (
    <div>
        <div>
           <Button variant="outline"render={<Link href="/dashboard/analytics/weekly" />}nativeButton={false}>Weekly</Button>

           <Button variant="outline"render={<Link href="/dashboard/analytics/monthly" />}nativeButton={false}>Monthly</Button>
        </div>
        {children}
    </div>
  )
}
