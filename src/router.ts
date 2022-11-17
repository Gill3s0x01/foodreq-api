import path from 'node:path';

import multer from 'multer';
import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategories';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';

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

router.get('/categories/:categoryId/products', listProductsByCategory);

//List Orders

router.get('/orders', listOrders);

//Create Order

router.post('/orders', createOrder);

//Get Order

router.patch('/orders/:orderId', changeOrderStatus);

//Delete / cancel Order

router.delete('/orders/:orderId', cancelOrder);
