const mongoose = require('mongoose')
const { Schema } = mongoose

const RoomSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('room', RoomSchema)
