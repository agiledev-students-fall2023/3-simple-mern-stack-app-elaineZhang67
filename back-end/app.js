require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const mongoose = require('mongoose')

const app = express() // instantiate an Express object
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()) // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// connect to database
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the database models we want to deal with
const { Message } = require('./models/Message')
const { User } = require('./models/User')

// a route to handle fetching all AboueMe contents:
app.get('/aboutme', async(req, res) => {
  try{
    res.json({
      intro: "Hello! I'm Elaine Zhang from the bustling city of New York, NY. I am an international student from China where I moved to Canada for high school since grade 9 and lately moved to new york for university. The experience of living in different countries provide me with an opening mind in accepting diversities. Speaking of my family, I have two little sisters who are all studying in Toronto, along with my mom, while my dad is staying back in China. I also have two dogs and a cat (but unfortunately, my cat passed away this year). Beside studying, I was the core member in the quant team of Business Analytics Club where I can learn more about how data and technology can be integrated to finance. Currently, I am the leader in the Chinese Assocciation Arts and Culture Club where I get hosted activities up to different levels such as Halloween, Chinese New Year, Gaming Competitions etc. to help Chinese students connected and communicate Chinese cultures. Speaking of my interests, When I'm not engrossed in my studies at New York University's bobst library, you'll likely find me listening to music and hum it out simultaneously. Singing has always been my solace and a way to express myself since high school. Since I am an extrovert in the 16-personality type, moving to a completely fresh encironment still sets challenge for me. Therefore, I joined our high school's choir and it was there where I met a lot of friends who love music. Music for me indeed is a mean to know people. Even more, purely speaking of music, It's amazing how a few lyrics can convey so much emotion and tell an entire story even if the language is not the native one you are familiear with. Aside from music, I cherish the moments I spend with my friends. Whether we're grabbing a coffee from a quaint cafe in Manhattan, taking a stroll in Central Park, or simply having a movie night at home, the memories we create together are invaluable to me. I personally value friends a lot because my friends heal me when I am frustrated about work and life while I will do the same when they are being down. I like to invite friends to my house to make dinner together and just have a small party chatting with each other. Additioanlly, and being in New York, there's always something new to explore! From hidden gems in Brooklyn to the iconic landmarks, I explore with my friends every weekend.Speaking of passion, I can't skip mentioning my love for K-pop. The captivating rhythms, stunning choreographies, and the sheer talent of K-pop artists have always fascinated me. It's more than just music; it's a culture, a movement, and an inspiration. Every beat, every lyric, and every performance tells a unique story, and I'm here for all of it! I even travelled to Korea this past summer for my favorite boy-group.That is a little shortcut of me!",
      picture: "https://drive.google.com/uc?export=view&id=1c6uf9MpOzS3cre5BWS0XNFx4HECs_uMd",
    })
  }catch(error){
    console.error(error)
    res.status(400).json({
      error:err,
      status: 'failed to retrieve AboutMe from the database',
    })
  }
})

// a route to handle fetching all messages
app.get('/messages', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({})
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})

// a route to handle fetching a single message by its id
app.get('/messages/:messageId', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({ _id: req.params.messageId })
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})
// a route to handle logging out users
app.post('/messages/save', async (req, res) => {
  // try to save the message to the database
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    })
  }
})

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!
