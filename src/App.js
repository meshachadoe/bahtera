import Navbar from './sections/navigation/index'
import Header from './sections/header/index'
import Pelayanan from './sections/pelayanan/index'

import allHighlights from './content/allHighlights'
import pattern from './assets/pattern-batik.svg'


const App = () => {
  return (
    <>
      <img className="batik" src={pattern} alt=""/>
      <Navbar />
      <Header allHighlights={allHighlights}/>
      <Pelayanan />
    </>
  );
}

export default App;
