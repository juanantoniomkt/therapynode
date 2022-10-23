import express from 'express';

import authorRoutes from './routes/Author'

class Application {

    app: express.Application;

    constructor() {
        this.app = express()
    }

    router() {
        this.app.use('/pensamientos', authorRoutes)

    }
    
    
    start() {


        this.app.listen(3000, () => {
            console.log("corriendo");
  
        })


    }
}

export default Application