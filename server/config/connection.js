const mongoose = require('mongoose');

const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ByteBlast_BulletinDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = db;

