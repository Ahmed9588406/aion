import DashboardNavbar from "@/components/DashboardNavbar"
import { Toaster } from "react-hot-toast"

export default function Landinglayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-full w-full">
        <DashboardNavbar />
        {children}
        <Toaster />
    </div>
  )
}

