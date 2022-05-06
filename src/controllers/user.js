import User from "../models/user.js"
import jwt from "jsonwebtoken"

class UserControllers {
    static async createUser(req, res) {
        try {
            const { username, email, password, avatarUrl } = req.body

            const user = await User.create({
                username,
                email,
                password,
                avatarUrl
            })

            res.status(201).json(user)

        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }

    static async findAll(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        }
        catch (error) {
            return res.status(500).json({ "error": "algo deu errado" })
        }
    }

    static async findOne(req, res) {
        try {
            const { id } = req.params
            const users = await User.findById(id)
            return res.json(users)

        } catch (error) {
            return res.status(500).json({ "error": "algo deu errado" })
        }
    }

    static async updateUser(req, res) {
        try {
            const { id } = req.params
            const { password, avatarUrl } = req.body
            const userUpdated = await User.findByIdAndUpdate(id, {
                password, avatarUrl, updateAt: new Date(), new: true
            }, {
                returnDocument: "after"
            })

            res.status(200).json(userUpdated)

        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params

            await User.findByIdAndRemove(id)

            res.status(204).json({})

        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                email
            }).select("+password")

            if (!user) {
                throw new Error({ "erro": "usuário não encontrado" })
            }

            if (user.password !== password) {
                throw new Error({ "erro": "senha inválida" })
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d" })

            return res.json({token: token, userId: user.id, name: user.username})

        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }
}

export default UserControllers