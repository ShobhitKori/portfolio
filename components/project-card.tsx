import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 animate-on-scroll opacity-0 transition-opacity duration-1000">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" asChild>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <ExternalLink className="h-4 w-4" />
            <span>Demo</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
