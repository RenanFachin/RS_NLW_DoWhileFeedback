import { Request, Response } from 'express' 
import { ProfileUserService } from '../services/ProfileUserService';


class ProfileUserController {
    async handle(request: Request, response: Response) {
        // Capturando o parâmetro que o service necessita
        const { user_id } = request

        // Instânciando o service
        const service = new ProfileUserService()

        // Armazenando o resultado da função execute do service na variável result
        const result = await service.execute(user_id);

        // Retornando
        return response.json(result)
    }
}

export { ProfileUserController }