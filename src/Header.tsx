import './Header.css'
import { Link, To } from "react-router-dom";
import { Button } from '@mantine/core';

export function Header() {
  return (
    <div id="header">
      <Link to={-1 as To}><Button variant="filled" className="button-primary">&lt; Back</Button></Link>
    </div>
  )
}
