import User from "../models/User.js"


// router.get('/api/users'); // ver todos los usuarios super_admin
// router.get('/api/users/profile'); //ver perfil usuario
// router.put('/api/users'); //modificar perfil al menos un campo

//ver TODOS los usuarios: super_admin
export const getAllUser = async (req, res) => {
    try {

        if (req.user && req.user.role === 'super_admin') {
            const users = await User.find({});
            res.json(users);
        } else {
            //devolver aqui el error si no es super_admin
            res.status(403).json(
                {
                    success: false,
                    message: 'access denied, only super_admin allowed'


                }
            );

        }

    } catch (error) {

        res.status(500).json(
            {
                success: false,
                message: 'users not found',
                error: error


            }
        );

    }


};
//ver tu perfil de usuario
export const getUserProfile = async (req, res) => {

    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json(
                {
                    success: false,
                    message: 'user not found',
                    error: error.message

                }
            );
        }

        const userProfile = {   //omitir la contraseña...
            username: user.username,
            email: user.email,
        }

        res.json(userProfile);


    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error obtaining the user profile',
                error: error.message

            }
        )


    }
};

//modificar perfil, al menos un campo.
export const updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json(
                {
                    message: 'User not found'

                },

                res.status(200).json(
                    {
                        message: 'profile update success',
                        user: updatedUser

                    }
                )
            );
        }

    } catch (error) {
        res.status(500).json(
            {
                message: "update profile fails",
                error: error

            }
        )

    }

};