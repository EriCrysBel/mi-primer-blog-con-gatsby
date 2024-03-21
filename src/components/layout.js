import * as React from 'react'
import { Link } from 'gatsby'
import {
 container,
 heading,
 navLinks,
 navLinkItem,
 navLinkText
} from '../components/layout.module.css'


const Layout = ({ pageTitle, children }) => {
return (
<div className={container}>
    <nav >
    <ul className={navLinks}>
        <li className={navLinkItem}><Link to="/">Home</Link></li>
        <li className={navLinkItem}><Link to="/sobremi">Sobre Mi</Link></li>
        <li className={navLinkItem}><Link to="/blog">Blog</Link></li>
        <li className={navLinkItem}><a href='https://github.com/ericrysbel' className={navLinkText}>Github</a></li>
    </ul>
    </nav>
    <main>
    <h1 className={heading}>{pageTitle}</h1>
    {children}
    <footer><p className='footer'>&copy; Erika {new Date().getFullYear()}</p></footer>
    </main>
</div>
)
}


export default Layout