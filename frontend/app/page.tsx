import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 mx-auto max-w-screen-xl py-32">
        <div className="text-center w-[60%] mx-auto">
          <h1 className="text-7xl font-bold">Discover the world&apos;s best stories</h1>
          <p className="text-xl mt-4 w-11/12 mx-auto">Explore a curated collection of thought-provoking articles, personal essays, and insightful commentary on a wide range of topics.</p>
          <div className="flex gap-4 items-center justify-center">
            <Button variant="outline" className="px-8 mt-6 py-6">Join Now</Button>
            <Button className="px-8 mt-6 py-6">Start Reading</Button>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
