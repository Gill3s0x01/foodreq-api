import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 8080;

    app.use(router);

    app.listen(8080, () => {
      console.log(`🎩 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err, 'Error connecting'));
