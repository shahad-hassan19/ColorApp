import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router';

function App() {


  return (
      <div>
        <Header />
        <div className='mt-28 px-9 md:px-10 lg:px-16'>
          <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default App
