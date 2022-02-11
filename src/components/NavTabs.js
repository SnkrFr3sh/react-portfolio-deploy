import React from 'react';
import './Nav.css'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <section 
      style={{
        display: 'flex',
        fontFamily: 'helvetica',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212529',
        color: 'white',
        fontSize: '10px'

      }}
      >
      <ul 
        style={{
          color:'white'
        }}
      className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#landing"
            onClick={() => handlePageChange('Landing')}
            className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#webProjects"
            onClick={() => handlePageChange('WebProjects')}
            className={currentPage === 'WebProjects' ? 'nav-link active' : 'nav-link'}
          >
            Web Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;
