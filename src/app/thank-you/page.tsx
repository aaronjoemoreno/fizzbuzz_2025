import Image from 'next/image'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="space-y-4 text-center">
        <Image
          src="/fizzbuzz-animate.gif"
          alt="FizzBuzz GIF"
          width={200}
          height={200}
          unoptimized={true}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Thanks! Expect to hear from us soon!
        </h1>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-none"
        >
          <Image
            src="/fizz-buzz-LOGO.png"
            alt="Back Home"
            width={24}
            height={24}
            className="mr-2"
          />
          Back Home
        </Link>
      </div>
    </main>
  )
}
