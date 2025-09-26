import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "Commercial Office Complex",
      category: "Commercial",
      description: "Complete HVAC system installation for 50,000 sq ft office complex with energy-efficient ducting.",
      image: "/modern-office-hvac.png",
      tags: ["Ducting", "Commercial", "Energy Efficient"],
    },
    {
      title: "Residential Villa Project",
      category: "Residential",
      description: "Custom evaporative cooling system for luxury villa with smart climate control integration.",
      image: "/luxury-villa-air-conditioning-system.jpg",
      tags: ["Evaporative Cooling", "Residential", "Smart Controls"],
    },
    {
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Large-scale ducting installation for warehouse facility with specialized ventilation requirements.",
      image: "/industrial-warehouse-ventilation-system.jpg",
      tags: ["Industrial", "Ventilation", "Large Scale"],
    },
    {
      title: "Hospital HVAC System",
      category: "Healthcare",
      description: "Critical environment HVAC system with advanced filtration and precise temperature control.",
      image: "/hospital-hvac-clean-room-system.jpg",
      tags: ["Healthcare", "Clean Room", "Precision Control"],
    },
    {
      title: "Shopping Mall Climate Control",
      category: "Commercial",
      description: "Multi-zone climate control system for large shopping complex with energy optimization.",
      image: "/shopping-mall-air-conditioning-system.jpg",
      tags: ["Multi-Zone", "Commercial", "Energy Optimization"],
    },
    {
      title: "Data Center Cooling",
      category: "Technology",
      description: "Precision cooling system for data center with redundant backup and monitoring systems.",
      image: "/data-center-cooling-system-servers.jpg",
      tags: ["Data Center", "Precision Cooling", "Monitoring"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Showcasing our expertise through successful HVAC installations across various industries and project
              scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
