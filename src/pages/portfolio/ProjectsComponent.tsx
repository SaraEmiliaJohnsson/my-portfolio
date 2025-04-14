import GitHubProjects from "../../components/github/GitHubProjects"
import "./ProjectsComponent.css"

const ProjectsComponent = () => {

  return (
    <>
      <div className="main-projects-container">
        <h1>Mina projekt</h1>
        <GitHubProjects />
      </div>
    </>
  )
}

export default ProjectsComponent;