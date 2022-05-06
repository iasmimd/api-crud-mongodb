import User from "../models/user.js"

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
        } catch (error) {
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
                 password, avatarUrl, new: true
            })

            res.status(200).json(userUpdated)

        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }

    static async deleteUser(req, res){
        try {
            const {id} = req.params

            await User.findByIdAndRemove(id)

            res.status(204).json({})
        } catch (error) {
            res.status(500).json({ "error": "algo deu errado ):" })
            console.log(error)
        }
    }


}

export default UserControllers