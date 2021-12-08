import{Router} from "express";

import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
/**
 * GET = Buscas
 * POST = Criar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 * 
 * Tipos de parametros:
 * Routes params => parametros de rota
 * Query params => Filtros e buscas
 * Body params => { json com dados }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export{routes};