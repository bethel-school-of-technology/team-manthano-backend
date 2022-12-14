import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import vehcileRoutes from './routes/vehicleRoutes'
import userRoutes from './routes/userRoutes'

const connectionString: string = 'mongodb://localhost:27017/carShop';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'),
    err => console.log('Error connecting to the database', err));

const app = express();

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:3001']
};
app.use(cors(corsOptions));


// routes
app.use('/api/vehicles', vehcileRoutes);
app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

app.listen(3000);