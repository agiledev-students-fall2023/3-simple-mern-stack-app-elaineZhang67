import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import MessageStandalone from './MessageStandalone'
import Home from './Home'
import AboutMe from './AboutMe'
import Header from './Header'
import Footer from './Footer'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
<<<<<<< Updated upstream
            {/* a route for the home page */}
            <Route path="/" element={<Home />} />

            {/* a route to see a list of all messages */}
            <Route path="/messages" element={<Messages />} />

            {/* a route for just a single message, where the id of the desired message is passed as a parameter */}
            <Route
              path="/messages/:messageId"
              element={<MessageStandalone />}
            />
=======
            <Route path="/" element={<Home />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/AboutMe" element={<AboutMe />}></Route>
>>>>>>> Stashed changes
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
