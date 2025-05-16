import Login from './components/user-module/Login'
import { Route, Routes } from 'react-router-dom'
import  { SidebarDemo } from './components/user-module/Home'
import SignUp from './components/user-module/SignUp'
import Navbar from './components/user-module/Navbar'
import Booking from './components/user-module/Booking'
import FunFacts from './components/user-module/FunFacts'
import Feedback from './components/user-module/Feedback'
import About from './components/user-module/About'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<SidebarDemo />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
       <Route path="/" element={<SidebarDemo />}>
        {/* <Route index element={<SidebarDemo />} /> */}
        <Route path="booking" element={<Booking />} />
        <Route path="about" element={<About />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>

      </Routes>
{/* <Footer/> */}
    </div>
  )
}

export default App