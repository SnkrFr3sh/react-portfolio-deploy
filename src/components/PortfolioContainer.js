import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import ArtMediums from './pages/ArtMediums';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import WebProjects from './pages/WebProjects';
import Landing from './pages/Landing'

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Landing');

    const renderPage = () => {
        if (currentPage === 'Landing') {
            return <Landing />
        } else if (currentPage === 'AboutMe') {
            return <AboutMe />
        } else if (currentPage === 'WebProjects') {
            return <WebProjects />
        } else if (currentPage === 'Resume') {
            return <Resume />
        } else return <Contact />
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>

    );

};

export default PortfolioContainer