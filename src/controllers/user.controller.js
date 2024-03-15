import User from "../models/User"

// router.get('/api/users'); // ver todos los usuarios super_admin
// router.get('/api/users/profile'); //ver perfil usuario
// router.put('/api/users'); //modificar perfil al menos un campo

//ver TODOS los usuarios: super_admin
const getAllUser = (req, res) => {
    try {

    } catch (error) {

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
const updateUserProfile = (res, res) => {

    try {

    } catch (error) {

    }

};