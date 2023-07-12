const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        attemptToConnectToDatabase()
    }
    catch (err) {
        handleFailedDatabaseConnection(err);
    }
};

async function attemptToConnectToDatabase() {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

function handleFailedDatabaseConnection(err) {
    console.log(err);
}

module.exports = connectToDatabase;