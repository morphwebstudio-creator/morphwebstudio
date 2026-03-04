import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Progetti = () => (
  <Layout>
    {/* Hero Banner — same structure as /servizi */}
    <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
      <div className="absolute -right-16 top-16 h-64 w-64 md:h-96 md:w-96 rounded-full border-2 border-accent/20" />
      <div className="absolute -right-8 top-24 h-48 w-48 md:h-72 md:w-72 rounded-full border border-accent/15" />
      <div className="absolute right-[20%] top-0 w-[2px] h-32 bg-accent/15" />
      <div className="absolute left-[10%] bottom-[10%] h-40 w-40 rounded-full border-2 border-accent/15" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/50 animate-slide-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            MorphWebStudio
          </span>
          <h1 className="mt-8 text-display font-serif font-black text-primary-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
            I Nostri<br />
            Progetti<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-primary-foreground/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Una selezione dei siti web che abbiamo realizzato per PMI e professionisti italiani.
          </p>
        </div>
      </div>
    </section>

    {/* Project Grid */}
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Progetti;
