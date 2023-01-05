import { Request, Response } from 'express' 
import { AuthenticateUserService } from '../services/AuthenticateUserService'


class AuthenticateUserController {
    async handle(request: Request, response: Response) {

        const { code } = request.body

        // Instanciando a camada de serviço
        const service = new AuthenticateUserService()

        try{
            const result = await service.execute(code)
            return response.json(result)
        } catch(e) {
            return response.status(401).json(e.message)
        }
    }
}

export { AuthenticateUserController }