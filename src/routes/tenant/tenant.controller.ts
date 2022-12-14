import { NextFunction, Request, Response } from 'express';

export class TenantController {
  constructor() {
    // do nothing.
  }

  public readonly exampleRequest = (req: Request, res: Response, next: NextFunction) => {
    return res.json({
      message: 'HELLO',
    });
  };
}
