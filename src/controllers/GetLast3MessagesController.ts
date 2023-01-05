import { Request, Response } from 'express' 
import { GetLast3MessagesServices } from '../services/GetLast3MessagesService';


class GetLast3MessageController {
    async handle(request: Request, response: Response) {
        // Instânciando o service
        const service = new GetLast3MessagesServices()

        // Armazenando o resultado da função execute do service na variável result
        const result = await service.execute();

        // Retornando
        return response.json(result)
    }
}

export { GetLast3MessageController }