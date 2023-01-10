import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import vehcileRoutes from './routes/vehicleRoutes'
import userRoutes from './routes/userRoutes'
import makeRoutes from './routes/Make_Model_Route'

const connectionString: string = 'mongodb+srv://team-manthano:bst-manthano-2022@team-manthano.bf8aadz.mongodb.net/?retryWrites=true&w=majority';

// const connectionString: string = 'mongodb://localhost:27017/carShop';

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
app.use('/api/makes', makeRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

app.listen(3000);