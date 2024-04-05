require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
export const app=express();
import cors from "cors";
import cookieParser from "cookie-parser";

//  body parser------
app.use(express.json({limit:"50mb"}));
// cors=>cross origin resourse sharing
app.use(cookieParser());
//------------- cors=> cross origin resource sharing----------
app.use(cors({
    origin:process.env.ORIGIN
}))
// -------TEST api---
// Define a GET route handler
app.get('/test', (req:Request, res:Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'API is working',
    });
})

app.all("*",(req:Request, res:Response, next: NextFunction)=>{

    const err= new Error(`Router ${req.originalUrl} not found`)as any;
    err.statusCode=404;
    next(err)
})