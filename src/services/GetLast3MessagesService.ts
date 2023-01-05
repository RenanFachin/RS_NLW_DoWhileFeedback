import prismaClient from "../prisma/client";

class GetLast3MessagesServices {
    async execute (){
        const messages = await prismaClient.message.findMany({
            take: 3, // Limite de dados que vamos buscar
            orderBy: {
                created_at: "desc" // Da mais atual para a mais antiga
            },
            include: {
                user: true, // Trazendo as infos do usuário que escreveu a msg
            }
        })

        // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

        return messages
    }
}

export { GetLast3MessagesServices }