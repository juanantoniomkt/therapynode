

import controller from '../controllers/Author'
import express from 'express';

const router = express.Router()

router.get('/get/', controller.readAll)

export default router