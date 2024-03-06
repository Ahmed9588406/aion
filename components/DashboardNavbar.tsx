"use client"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"
const routes =[
  {
    name: "Lead Magnets",
    path: "/lead-magnets"
  },
  {
    name: "Account",
    path: "/account"
  }
]
function DashboardNavbar() {
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <div className="p-4 flex justify-between items-center text-purple-500 border-b-2">
      <Link href="/">
        <h1 className="text-2xl font-bold">Aion</h1>
      </Link>
      <div className="flex gap-x-6 text-lg items-center">
        {
          routes.map((route, idx) => (
            <Link key={idx} href={route.path} className={
              pathname === route.path ? "border-b-2 border-purple-300" : ""
              }>
              {route.name}</Link>
          ))
        }
        <UserButton  afterSignOutUrl="/"/>
      </div>

    </div>
  )
}

export default DashboardNavbar