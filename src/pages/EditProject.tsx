import { Link, To, useParams } from "react-router-dom";
import { projectList } from "../mock-data";

export function EditProject() {
  const { projectTag } = useParams();
  const project = projectList.find((pr) => pr.id === projectTag)

  return (
    <>
      <h1>Edit project {project?.name}</h1>
      <p>This is a page with an editor for the project with tag <code>{projectTag}</code>.</p>
      <p><Link to={-1 as To}>Back to the project list</Link></p>
    </>
  )
}
