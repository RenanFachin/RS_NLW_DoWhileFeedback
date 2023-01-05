import { Request, Response } from 'express' 
import { CreateMessageService } from '../services/CreateMessageService';


class CreateMessageController {
    async handle(request: Request, response: Response) {
        // Parâmetros 
        const { message } = request.body;
        const { user_id } = request

        // Instanciando o service
        const service = new CreateMessageService();

        // Aguardando a execução da função execute e mandando os parâmetros necessários
        const result = await service.execute(message, user_id)

        return response.json(result)
    }
}

export { CreateMessageController }