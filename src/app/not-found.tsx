import { Button } from "antd"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-[90vh] flex flex-col gap-y-3 justify-center items-center text-3xl">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button type="text" className="bg-primary text-white px-6 py-5 text-lg">Return Home</Button>
      </Link>
    </div>
  )
}
