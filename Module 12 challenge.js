import React from 'react';
import Header from './Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome to My Portfolio</h2>
                {/* Other content */}
            </main>
        </div>
    );
};

<nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </Router>
    );
};

<div className="portfolio">
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}
                />
            ))}
        </div>


    return (
      <div className="project">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    );
  

    <footer>
      <p>&copy; {year} {companyName}. All rights reserved.</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>