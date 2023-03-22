import './nav.css'
import { Link } from 'react-router-dom';

function NavList() {
  return ( 
    <div className='NavList'> 
  <ul className='NavList-ul'>
    <li>
        <a href='https://www.google.com/'> Sneakers</a>
    </li>

    <li>
        <a href='google.com'>Contact</a>
    </li>

    <li>
        <a href='google.com'> Location</a>
    </li>
  
    <li>
     <Link to = '/login' style={{ textDecoration: 'none'}}>
      <a href=''>Account</a>
     </Link>
    </li>
  
  </ul>
  
  </div>

  )
}

export default NavList;