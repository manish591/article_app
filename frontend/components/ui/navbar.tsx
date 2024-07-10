import { FeatherIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="py-5 bg-foreground text-white">
      <div className="flex justify-between items-center w-11/12 mx-auto max-w-screen-xl">
        <div className="flex gap-3 items-center">
          <FeatherIcon />
          <h2 className="text-lg font-bold">Paper Post</h2>
        </div>
        <div className="flex gap-4 items-center">
          <p>Home</p>
          <p>Trending</p>
          <p>Categories</p>
          <p>Write</p>
        </div>
        <div>
          <Button className="px-8">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}