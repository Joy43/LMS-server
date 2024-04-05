import { Response, Request, NextFunction } from 'express';
import ErrorHandler from '../utils/ErrorHandler';





export const ErrorMiddleware=(err:any,
    req:Request,
    res:Response,
    next:NextFunction)=>{
    err.statusCode=err.statusCode||500;
    err.message=err.message ||' INTERN SERVER error';
    // wrong mongoBb id error
    if(err.name==='CastError'){
const message =`Resources not found.invalid ${err.path}`;
err=new ErrorHandler (message,400);
    }
    if (err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} entered`;
        err =new ErrorHandler(message,400);
    }
    if(err.name==='jsonwebtokenError'){
      const message =`json web token is invalid,try again`;
      err=new ErrorHandler(message,400);
    }
    // jwt expired
    if(err.name==='tokenExpiredError'){
        const message=`json web token is invalid ,try again`;
        err=new ErrorHandler(message,400)
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
}