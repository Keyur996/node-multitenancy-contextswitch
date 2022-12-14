// =============== Import Packages ==================
import { Router } from 'express';
// ==================================================
import { AdminController } from './admin.controller';
import { Route } from '@interfaces/route.interface';
import { setAdmin } from '@/adapter/connectionManager';

export default class AdminRoute implements Route {
  public readonly path = '/admin';
  public readonly router = Router({ mergeParams: true });
  private readonly adminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private readonly initializeRoutes = () => {
    this.router.use(`${this.path}`, setAdmin);
    this.router.use(`${this.path}/example`, this.adminController.exampleRequest);
  };
}
