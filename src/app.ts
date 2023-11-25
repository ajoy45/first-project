import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentsRouts } from './app/modules/stuednt/student.router';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1/students',studentsRouts)



app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});
console.log(process.env.DATABASE_URL)
export default app;
