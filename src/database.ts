import mongoose, { ConnectOptions } from 'mongoose';

async function connect() {
    
    try {
        
        await mongoose.connect("mongodb://mongo:vUlWd0El2G63sMTwLeO0@containers-us-west-95.railway.app:6755", {
            useNewUrlParser: true,

        } as ConnectOptions)
        

        console.log(`Data base connected`);

        

    } catch {
        console.log('Error');
        
    }
}


export default connect