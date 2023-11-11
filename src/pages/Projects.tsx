import { Link } from "react-router-dom";
import { projectList } from "../mock-data";

export function Projects() {
  return (
    <>
      <h1>Boards</h1>
      <p>Here you find the list of your boards:</p>
      <ul>
        {
          projectList.map((project) => (
            <li key={project.id}>
              <Link to={project.id}>{project.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
