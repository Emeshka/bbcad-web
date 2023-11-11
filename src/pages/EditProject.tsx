import { useParams } from "react-router-dom";
import { projectList } from "../mock-data";

export function EditProject() {
  const { id } = useParams();
  const project = projectList.find((pr) => pr.id === id)

  return (
    <>
      <h1>Edit project {project?.name}</h1>
      <p>This is a page with an editor for the board with id <code>{id}</code>.</p>
    </>
  )
}
