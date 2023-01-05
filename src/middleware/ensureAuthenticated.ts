import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // Capturando o token
    const authToken = request.headers.authorization

    // Verificando se há informações dentro do token
    if(!authToken){
        return response.status(401).json({
            errorCode: "token.invalid",
        })
    }

    // Caso esteja preenchido, verificar a validade deste token
    // Estrutura do token: Bearer 8932492gfdgd749823adas
    // [0] Barer
    // [1] 8932492gfdgd749823adas

    const [, token] = authToken.split(" ")


    // Fazendo um try catch para tratar erros
    try{
        const { sub } = verify(token, process.env.JWT_SECRET)

        // Adicionando os dados do usuário dentro de um request
        request.user_id = sub        

    } catch(e){
        return response.status(401).json({errorCode: "token.expired"})
    }

}