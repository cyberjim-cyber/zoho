import React from 'react';
import Candid2 from '../Candid2/Candid2';
import Candidate from '../Candidate/Candidate';
import Filter from '../Filter/Filter';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="row">

         
            <div className="filter">
            <Filter></Filter>
            </div>
            </div>
            <div className="row">
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="candid">
                <Candidate></Candidate>
                {/* <Candid2></Candid2> */}
            </div>
            </div>
            

        </div>
    );
};

export default Home;