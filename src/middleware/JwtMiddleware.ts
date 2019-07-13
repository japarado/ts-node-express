import { ExpressMiddlewareInterface } from "routing-controllers";

const jwt = require('jsonwebtoken');

class JwtMiddleware implements ExpressMiddlewareInterface
{
  use(req: any, res: any, next: any): any
  {
    const token: string = req.header('x-auth-token');

    if(!token)
    {
      return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    try 
    {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded.user;
      next();
    }
    catch(err)
    {
      res.status(401).json({ msg: 'Token is not valie' })
    }
  }
}

export default JwtMiddleware;

