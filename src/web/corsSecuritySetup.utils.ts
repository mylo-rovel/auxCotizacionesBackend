import {CorsOptions} from "cors";

//! list of allowed servers
const whitelist: string[] = [
    "http://localhost:3000"
];

export const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        //? note that !origin is undefined if the request comes from this same machine
        if (!origin || whitelist.indexOf(origin) !== -1){
            callback(null, true);
        }
        else{
            callback(new Error("Not allowed by CORS :o"))
        }
    }
};