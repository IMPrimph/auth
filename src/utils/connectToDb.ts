import mongoose from "mongoose";
import config from 'config'
import log from "./logger";

export default async function connectToDB(){
    const dbUri = config.get<string>('dbUri')

    try{
        await mongoose.connect(dbUri)
        log.info('Connected to DB')
    } catch(e) {
        // 1 means we exited witha  failure
        process.exit(1)
    }
}
