import './startingPage.css'
import { NavLink } from "react-router-dom";
import pic from './wallpapersden.com_rick-and-morty-portal_3840x2160.jpg'


const StartingPage = () => {

    return (
        
    <div className="main">
        <div>
            <img src={pic}
            alt="Rick And Morty background"
            className='background'></img>
        </div>
        <div className='content'>
            <div className='item-logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
                alt="Rick And Morty Logo"
                className='logo'></img>
            </div>
            <div className='item-character'>
                <button>
                <NavLink className="link-text" to="/characters">
                    Characters
                </NavLink>
                </button>
            </div>
            <div className='item-location'>
                <button>
                <NavLink
                    className="link-text" to="/locations">
                    Locations
                </NavLink>
                </button>
            </div>
            <div className='item-description'>
            Click the character button to access the description of Rick 
            and Morty characters or the location button to access the locations.
            </div>
        </div>
    </div>
        
    )
}

export default StartingPage