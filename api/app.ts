import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose';

const connectionString: string = 'mongodb://localhost:27017/carShop';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'),
    err => console.log('Error connecting to the database', err));

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
const cors = require('cors');
app.use(cors());


// routes

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

app.listen(3000);