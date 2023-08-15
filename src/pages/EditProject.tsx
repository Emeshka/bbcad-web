import { useParams } from "react-router-dom";

export function EditProject() {
  const { projectTag } = useParams();

  return (
    <>
      <h1>Edit project {projectTag}</h1>
      <p>This is a page with an editor for the project with tag <code>{projectTag}</code>.</p>
    </>
  )
}
