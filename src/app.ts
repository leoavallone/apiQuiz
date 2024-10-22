import express, {Application} from 'express';
import userRoutes from '../src/routes/userRoutes';

const app: Application = express();

app.use(express.json());
app.use('/api', userRoutes);

export default app;