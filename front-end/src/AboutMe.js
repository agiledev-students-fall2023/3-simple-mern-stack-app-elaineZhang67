import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutMe.css'
import pic from './WechatIMG1.jpg'

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  const [intro, setAboutMe] = useState('')
  const [picture, setPicture] = useState('')
  const [error, setError] = useState('')

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchAboutMe = () => {

    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutme`)
      .then(response => {
        // axios bundles up all response data in response.data property
        console.log(response)
        setAboutMe(response.data.intro)
        setPicture(response.data.picture)
      })
      .catch(err => {
        setError(err)
      })
  }


  // set up loading data from server when the component first loads
  useEffect(() => {
    //fetch messages this once
    fetchAboutMe()
  },[])

  return (
    <>
      <h1>About Me: Elaine Zhang</h1>

      {error && <p className="error">{error}</p>}
      <p>{intro}</p>
      <img src={pic} alt="Me in Lunar New Year" />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe