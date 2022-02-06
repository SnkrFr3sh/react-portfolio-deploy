import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ArtMediums from './pages/ArtMediums';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import WebProjects from './pages/WebProjects';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />
        } else if (currentPage === 'AboutMe') {
            return <AboutMe />
        } else if (currentPage === 'ArtMediums'){
            return <ArtMediums />
        } else if (currentPage === 'WebProjects'){
            return <WebProjects />
        } else if (currentPage === 'Resume'){
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