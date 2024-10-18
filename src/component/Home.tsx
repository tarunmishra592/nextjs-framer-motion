import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome to My World
        </h1>
        <p className="text-xl text-gray-600 mb-8">Bringing creativity to life through design and code</p>
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="abstract design"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        
        <Card className="bg-gradient-to-br from-pink-400 to-red-500 text-white">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the passion and skills that drive my creative journey.</p>
            <Button asChild className="mt-4 bg-white text-pink-500 hover:bg-gray-100">
              <Link href="/about">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
          <CardHeader>
            <CardTitle>My Work</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore a vibrant collection of my latest projects and designs.</p>
            <Button asChild className="mt-4 bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/work">View Portfolio</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lets collaborate and bring your ideas to life with vibrant creativity.</p>
            <Button asChild className="mt-4 bg-white text-blue-500 hover:bg-gray-100">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </CardContent>
        </Card>

      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Featured Project
        </h2>
        <Image
          src="/placeholder.svg?height=300&width=600"
          alt="Featured project screenshot"
          width={600}
          height={300}
          className="rounded-lg shadow-lg mx-auto mb-4"
        />
        <p className="text-xl text-gray-600 mb-4">A glimpse into my latest creative endeavor</p>
        <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
          <Link href="/work">See All Projects</Link>
        </Button>
      </section>
    </div>
  )
}