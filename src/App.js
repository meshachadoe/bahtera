import "./styles/base.scss"
import Navbar from './sections/navigation/NavBar'
import Header from './sections/header/Header'

import allHighlights from './content/allHighlights'

function App() {
  return (
    <>
      <Navbar />
      <Header allHighlights={allHighlights}/>
    </>
  );
}

export default App;
