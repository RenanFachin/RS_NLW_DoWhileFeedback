import prismaClient from "../prisma/client"

class CreateMessageService{
    async execute(text: string, user_id: string){
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            // Retornando os dados do usuário que criou a mensagem
            include: {
                user: true
            }
        })


        return message
    }
}

export { CreateMessageService }