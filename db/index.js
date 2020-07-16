const debug = require('debug')('adventure-capitalist-server:db')
const mongoose = require('mongoose')

function setupDB (dbUri) {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  // mongoose.connect(dbUri)
 mongoose.connect('mongodb+srv://rupa:Password01@cluster0-twmln.mongodb.net/capitalist?retryWrites=true&w=majority')


  const db = mongoose.connection

  db.on('error', function (err) {
    debug(err)
  })

  db.once('open', function () {
    debug('Connection Successful!')
  })

  return db
}

module.exports = setupDB
