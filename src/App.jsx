import {Route,Routes, BrowserRouter} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation';



function App() {
  return(
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App