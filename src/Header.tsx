import './Header.css'
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mantine/core';

export function Header() {
  const location = useLocation();

  return (
    <div id="header">
      {location.pathname === '/' ? null : <Link to=".."><Button variant="filled" className="button-primary">&lt; Back</Button></Link>}
    </div>
  )
}
