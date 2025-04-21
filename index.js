const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT ?? 5000;
const authRouter = require('./authRouter');

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://test:test@cluster0.zdsswks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        app.listen(PORT, () => console.log(`Server started on PORT=${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();