import { useFetchProjects } from "./fetchProjects";

export default function Projects() {
  const { isLoading, projects } = useFetchProjects();
  console.log(isLoading, projects);
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
        <div className="projects-center">
          {projects.map((project) => {
            const { id, img, url, title } = project;
            return (
              <a
                className="project"
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <img className="img" src={img} alt="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
