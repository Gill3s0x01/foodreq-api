import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 8080;
    app.use((req, res, next) => {
      // dommen http for permissions exemple localhost:8080
      res.setHeader('Access-Control-Allow-Origin', '*');
      //methods for permissions
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🎩 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err, 'Error connecting'));
