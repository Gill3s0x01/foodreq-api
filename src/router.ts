import path from 'node:path';

import multer from 'multer';
import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { deleteProduct } from './app/useCases/products/deleteProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//List Categories

router.get('/categories', listCategories);

//Create Category

router.post('/categories', createCategory);

//List Products

router.get('/products', listProducts);

//Create Product

router.post('/products', upload.single('image'), createProduct);

// delete Product

router.delete('/products/:productId', deleteProduct);

//Get Prpducts by category

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

//List Orders

router.get('/orders', (req, res) => {
  res.send('OK');
});

//Create Order

router.post('/orders', (req, res) => {
  res.send('OK');
});

//Get Order

router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

//Delete / cancel Order

router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
