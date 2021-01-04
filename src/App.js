import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Alert from './sections/alert/index'
import Navbar from './sections/navigation/index'
import Header from './sections/header/index'
import Pelayanan from './sections/pelayanan/index'
import Jadwal from './sections/jadwal/index'
import Footer from './sections/footer/index'

import allHighlights from './content/allHighlights'
import allSchedule from './content/allSchedule'
import allServices from './content/allServices'

const App = () => {
  const [ schedule, setSchedule ] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/jadwals')
      .then(response => response.json())
      .then(data => setSchedule(data))
  }, [])

  return (
    <Router>
      <Alert />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Header allHighlights={allHighlights}/>
          <Pelayanan allServices={allServices}/>
        </Route>
        <Route path='/jadwal'>
          <Jadwal allSchedule={allSchedule}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
