import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const validateNewOrder = (req:Request, res: Response, next:NextFunction) => {
  if (!req.body.productIds) {
    return res.status(mapStatusHTTP('INVALID_DATA'))
      .json({ message: '"productIds" is required' });
  }
  if (!Array.isArray(req.body.productIds)) {
    return res.status(mapStatusHTTP('UNPROCESSABLE_CONTENT'))
      .json({ message: '"productIds" must be an array' });
  }
  if (req.body.productIds.length === 0) {
    return res.status(mapStatusHTTP('UNPROCESSABLE_CONTENT'))
      .json({ message: '"productIds" must include only numbers' });
  }

  return next();
};

export default validateNewOrder;