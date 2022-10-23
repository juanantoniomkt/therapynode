import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res: any) => {
    console.log("hola");
    res.send('pong')
    
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log("el serv");
    
})