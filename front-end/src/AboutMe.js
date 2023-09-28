import { Link } from 'react-router-dom'
import './AboutMe.css'
import WechatIMG1 from './WechatIMG1.jpg'

/**
 * A React component that represents the About Me page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  return (
    <>
      <h1>Elaine Zhang!</h1>
      <p>Hello! I'm Elaine Zhang from the bustling city of New York, NY. I am an international student from China where I moved to Canada for high school since grade 9 and lately moved to new york for university. The experience of living in different countries provide me with an opening mind in accepting diversities. Speaking of my family, I have two little sisters who are all studying in Toronto, along with my mom, while my dad is staying back in China. I also have two dogs and a cat (but unfortunately, my cat passed away this year). </p>
      <p>Beside studying, I was the core member in the quant team of Business Analytics Club where I can learn more about how data and technology can be integrated to finance. Currently, I am the leader in the Chinese Assocciation Arts and Culture Club where I get hosted activities up to different levels such as Halloween, Chinese New Year, Gaming Competitions etc. to help Chinese students connected and communicate Chinese cultures. </p>
      <p>Speaking of my interests, When I'm not engrossed in my studies at New York University's bobst library, you'll likely find me listening to music and hum it out simultaneously. Singing has always been my solace and a way to express myself since high school. Since I am an extrovert in the 16-personality type, moving to a completely fresh encironment still sets challenge for me. Therefore, I joined our high school's choir and it was there where I met a lot of friends who love music. Music for me indeed is a mean to know people. Even more, purely speaking of music, It's amazing how a few lyrics can convey so much emotion and tell an entire story even if the language is not the native one you are familiear with. Aside from music, I cherish the moments I spend with my friends. Whether we're grabbing a coffee from a quaint cafe in Manhattan, taking a stroll in Central Park, or simply having a movie night at home, the memories we create together are invaluable to me. I personally value friends a lot because my friends heal me when I am frustrated about work and life while I will do the same when they are being down. I like to invite friends to my house to make dinner together and just have a small party chatting with each other. Additioanlly, and being in New York, there's always something new to explore! From hidden gems in Brooklyn to the iconic landmarks, I explore with my friends every weekend.</p>
      <p>Speaking of passion, I can't skip mentioning my love for K-pop. The captivating rhythms, stunning choreographies, and the sheer talent of K-pop artists have always fascinated me. It's more than just music; it's a culture, a movement, and an inspiration. Every beat, every lyric, and every performance tells a unique story, and I'm here for all of it! I even travelled to Korea this past summer for my favorite boy-group.</p> 
      <p>That is a little shortcut of me, and if you want to know more, tell me, and we will be friends.</p>
      <p>
      <Link to="/" className="picture">
          <img src={WechatIMG1}/>
        </Link>
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
