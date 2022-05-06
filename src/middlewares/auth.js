
import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) =>{
    try {
        const token = req.headers.authorization

        if (!token){
            return res.status(401).json({'erro': 'nenhum token foi passado'})
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({'erro': 'token invalido'})
            }
            req.userId = decoded.id
            return next()
        })
    } catch (error) {   
        res.status(500).json({'erro': 'algo deu errado'})
    }
}