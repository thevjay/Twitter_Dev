const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb+srv://vijay930:67THTyxdPvrOfwIB@cluster0.qyuho.mongodb.net/twitter_Dev')
}

module.exports = connect;