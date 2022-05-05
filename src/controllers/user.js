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
        }
    }
}

export default UserControllers