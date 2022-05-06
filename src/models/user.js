import mongoose from "../database/index.js";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatarUrl:{
        type: String,
        default: "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },
    createdAt:{
        type: String,
        default: new Date()
    },
    updatedAt:{
        type: String,
        default: null
    },
})

const User = mongoose.model("User", UserSchema)

export default User