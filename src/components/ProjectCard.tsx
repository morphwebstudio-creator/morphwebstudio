import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent/50 hover:shadow-xl animate-slide-up block"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Image / placeholder with tag */}
      <div className="relative h-52 bg-foreground flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <span className="font-serif text-xl font-bold text-primary-foreground/30">{project.name}</span>
        )}
        <span className="absolute top-4 left-4 font-serif text-5xl font-black text-primary-foreground/10">
          {project.tag}
        </span>
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-2 border-accent/30 transition-transform group-hover:scale-110" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            {project.sector}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
        </div>
        <h3 className="mt-2 font-serif text-lg font-bold text-foreground">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm font-semibold text-foreground">{project.metric}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
