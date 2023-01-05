import { Router } from "express";

// Controllers
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";

// Middlewares
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticated ,new CreateMessageController().handle)

export { router }