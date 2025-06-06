import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageModal } from "@/components/ui/image-modal";
import { ArrowLeft, Calendar, User, Target, Lightbulb, TrendingUp, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              Back to Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">Project Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {project.category}
            </Badge>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <User className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <ImageModal src={project.image} alt={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </ImageModal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
              <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Challenge</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {project.challenges}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Solution</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Results</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {project.results}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                      <ImageModal src={image} alt={`${project.title} - Image ${index + 2}`}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </ImageModal>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tools Used */}
            <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm animate-fade-in-up">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Client</span>
                    <p className="text-slate-900 dark:text-white">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Date</span>
                    <p className="text-slate-900 dark:text-white">{project.date}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Category</span>
                    <p className="text-slate-900 dark:text-white">{project.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Like this project?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Let's work together on your next creative project.
                </p>
                <Button variant="secondary" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-24 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <ImageModal src={relatedProject.image} alt={relatedProject.title}>
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </ImageModal>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to={`/project/${relatedProject.id}`}>
                        <Button size="sm" className="rounded-full bg-white/90 text-slate-900 hover:bg-white">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                      {relatedProject.description}
                    </p>
                    <Link to={`/project/${relatedProject.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;