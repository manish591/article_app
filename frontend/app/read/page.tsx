import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2 text-lg font-medium" prefetch={false}>
              <span>Acme Blog</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted">
        <div className="container max-w-5xl mx-auto py-12 px-4 md:px-6">
          <div className="grid md:grid-cols-[3fr_1fr] gap-8">
            <article className="prose prose-lg dark:prose-invert">
              <img
                src="/placeholder.svg"
                width={1200}
                height={600}
                alt="Featured Image"
                className="rounded-lg mb-8 w-full aspect-[2/1] object-cover"
              />
              <h1 className="text-4xl font-bold mb-2">
                The Joke Tax Chronicles: How a Lazy King Tried to Tax Laughter
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href="#" className="font-medium" prefetch={false}>
                      John Doe
                    </Link>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Published on July 11, 2024</div>
              </div>
              <p>
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
              </p>
              <p>
                The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the
                kingdom.
              </p>
              <p>
                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
                under the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he
                couldn&apos;t seem to stop Jokester.
              </p>
              <p>
                And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
                that they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
              </p>
              <blockquote>
                &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good joke, so it&apos;s only fair that they
                should pay for the privilege.&rdquo;
              </blockquote>
              <p>The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:</p>
              <ul>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
              <p>
                As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person
                who refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
              </p>
            </article>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="#"
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/80"
                    prefetch={false}
                  >
                    Humor
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/80"
                    prefetch={false}
                  >
                    Politics
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/80"
                    prefetch={false}
                  >
                    Satire
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/80"
                    prefetch={false}
                  >
                    History
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
                <div className="space-y-4">
                  <Link href="#" className="flex items-center gap-4" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={80}
                      alt="Recent Post"
                      className="rounded-md w-20 aspect-square object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium">The Rise and Fall of the Joke Tax Empire</h3>
                      <p className="text-sm text-muted-foreground">July 1, 2024</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={80}
                      alt="Recent Post"
                      className="rounded-md w-20 aspect-square object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium">The Jokesters Revenge: How One Fool Toppled a Kingdom</h3>
                      <p className="text-sm text-muted-foreground">June 15, 2024</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={80}
                      height={80}
                      alt="Recent Post"
                      className="rounded-md w-20 aspect-square object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium">The Laughter Rebellion: How Jokes Saved a Kingdom</h3>
                      <p className="text-sm text-muted-foreground">May 30, 2024</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Acme Blog. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}