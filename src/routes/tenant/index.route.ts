// =============== Import Packages ==================
import { Router } from 'express';
// ==================================================
import { TenantController } from './tenant.controller';
import { Route } from '@interfaces/route.interface';
import { setTenant } from '@/adapter/connectionManager';

export default class TenantRoute implements Route {
  public readonly path = '/tenant';
  public readonly router = Router({ mergeParams: true });
  private readonly tenantController = new TenantController();

  constructor() {
    this.initializeRoutes();
  }

  private readonly initializeRoutes = () => {
    this.router.use(`${this.path}`, setTenant());
    this.router.use(`${this.path}/example`, this.tenantController.exampleRequest);
  };
}
