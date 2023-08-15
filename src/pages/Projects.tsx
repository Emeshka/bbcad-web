import { Link } from "react-router-dom";

export function Projects() {
  const projectList = [
    {
      tag: 'mikroskhema_ekran_'+(new Date(2023, 4, 18).getTime().toString()),
      name: 'микросхема-экран'
    },
    {
      tag: 'mikroskhema_krutilka_'+(new Date(2023, 5, 10).getTime().toString()),
      name: 'Микросхема крутилка'
    }
  ]
  return (
    <>
      <h1>Projects</h1>
      <p>Here you find the list of your projects:</p>
      <ul>
        {
          projectList.map((project) => (
            <li key={project.tag}>
              <Link to={project.tag}>{project.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
