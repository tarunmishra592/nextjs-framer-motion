import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Vibrant E-commerce",
      description: "A colorful online store with a smooth user experience.",
      image: "/project1.jpg",
      tags: ["Web Design", "React", "Node.js"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Dynamic Dashboard",
      description: "An interactive data visualization platform.",
      image: "/project2.jpg",
      tags: ["UI/UX", "D3.js", "Vue.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Game App",
      description: "An addictive puzzle game with vibrant graphics.",
      image: "/project3.jpg",
      tags: ["Mobile", "Unity", "C#"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI Art Generator",
      description: "Create stunning artwork with the power of AI.",
      image: "/project4.jpg",
      tags: ["Machine Learning", "Python", "React"],
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className={`overflow-hidden transition-transform duration-300 hover:scale-105 bg-gradient-to-br ${project.color}`}>
            <CardHeader className="p-0">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 text-white">
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-black/20 p-4">
              <Button asChild className="w-full bg-white text-black hover:bg-gray-100">
                <Link href={`/project/${index + 1}`}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      

    </div>
  )
}