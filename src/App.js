import React from "react";
import About from './Components/About'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import HomeIcon from '@material-ui/icons/Home'
import DescriptionIcon from '@material-ui/icons/Description';
import {Tabs, Tab} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   return (
    <Router>
      <div>
        <nav>
          <h1 style={{textAlign: "center"}}>Lauren Baldino</h1>
          <h2 style={{textAlign: "center"}}>Software Engineering Student</h2>
          <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="black"
          aria-label="icon label tabs example"
        >
          <Tab icon={<HomeIcon  />} label="HOME" to="/" component={Link}/>
          <Tab icon={<PersonIcon />} label="ABOUT ME" to="/about" component={Link}/>
          <Tab icon={<BuildIcon />} label="PROJECTS" to="/projects" component={Link}/>
          <Tab icon={<DescriptionIcon  />} label="RESUME" to="/resume" component={Link}/>
          <Tab icon={<PermContactCalendarIcon  />} label="CONTACT ME" to="/contact" component={Link}/>
          
        </Tabs>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
