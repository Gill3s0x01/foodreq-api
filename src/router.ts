import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

//List Categories

router.get('/categories', listCategories);

//Create Category

router.post('/categories', (req, res) => {
  res.send('OK');
});

//List Products

router.get('/products', (req, res) => {
  res.send('OK');
});

//Create Product

router.post('/products', (req, res) => {
  res.send('OK');
});

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
