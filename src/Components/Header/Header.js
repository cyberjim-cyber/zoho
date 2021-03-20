import { faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div  className="header-full">
            
            <div className="nav-menu">
                <ul className="nav-list"  >
                    <li className="nav-li"><a className="nav-link" href="#"><FontAwesomeIcon style={{width:"40px"}} icon={faBars} /></a></li>
                    <li className="nav-li"><a  className="nav-link" href="#">Home</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Job opening</a></li>
                    <li className="nav-li"><a  className='nav-link active' active href="#">Candidates</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Interviews</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Referrels</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Departments</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Campaign</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#">Reports</a></li>
                    <li className="nav-li"><a  className='nav-link' href="#"><FontAwesomeIcon style={{width:"40px",color:"white"}} icon={faEllipsisH} /></a></li>
                </ul>
            </div>
            <div className="nav-icon">

            </div>
        </div>
    );
};

export default Header;