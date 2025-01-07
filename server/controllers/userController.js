import userModel from "../models/UserModel.js";

export const getUserData = async (req, res) => {
    try{

        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: true, message: "User not found"});
        }

        res.json({success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isVerified,
            }
        });

    }catch (error){
        return res.json({success: true, message: error.message});
    }
}