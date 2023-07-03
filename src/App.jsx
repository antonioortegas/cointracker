import './assets/styles/App.css'
import Header from './components/Header.jsx'
import Collection from './components/Collection.jsx'

import { collection } from './data/collection.json'

function App() {

  return (
    <>
      <Header />
      <Collection collection={collection} />
    </>
  )
}

export default App