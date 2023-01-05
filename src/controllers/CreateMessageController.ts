import { Request, Response } from 'express' 


class CreateMessageService {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        
    }
}

export { CreateMessageService }