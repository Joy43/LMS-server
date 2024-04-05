export default class ErrorHandler extends Error{
    statusCode:Number
    constructor(messsage:any,statusCode:Number){
        super(messsage);
        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor)
        
    }
}
