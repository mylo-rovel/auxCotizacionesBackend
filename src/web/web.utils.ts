import { Request, Response, NextFunction } from "express";

export const checkLoggedIn = (_: Request, res: Response, next: NextFunction) => {
    console.log("checkLoggedIn EEEEENTRA");
    const isLoggedIn = true;
    if (!isLoggedIn) { return res.status(404).json({error: 'You must login!'})}

    //? next() makes express to go to the next middleware
    next();
    //? everything after next is runned when the request goes back to the client
    console.log("checkLoggedIn VUEEEEELTA");
    return res.status(200);
}