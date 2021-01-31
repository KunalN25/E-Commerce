import React from 'react'
// import { Button } from 'react-bootstrap';
import './header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
       
        <nav >
            <ul className='nav-links'>
                <Link to='/'>
                <li><button>Home</button> </li>
                
                </Link>
                <Link to='/cart'>
                    <li><button>Cart</button></li>
                
                </Link>
                
                {/* <Link to='/'> */}
                <li><button>About Us</button> </li>
                
                {/* </Link> */}
                
            
            </ul>
            {/* <div className="ml-auto mr-5">
                <Button variant="primary">Add to cart</Button>

            </div> */}
                
           
        </nav>
    )
}
