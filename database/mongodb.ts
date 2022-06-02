import mongoose from "mongoose";
import config from "config";

async function connect() {
    const DBURI = config.get<string>('mongodburi')

    try {
        await mongoose.connect(DBURI)
        console.log('Connected to MongoDB');
        
    }
    catch (err:any) {
        console.log('Could no connect tu MongoDB')
        console.log(err.message)
        process.exit(-1);
    
    }
}
export default connect;