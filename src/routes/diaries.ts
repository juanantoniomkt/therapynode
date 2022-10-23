import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('get res')
})

router.post('/', (_req, res) => {
    res.send('post res')
})

export default router