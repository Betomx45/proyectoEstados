import db from "./index"

export const checkUserEmailPassword = async( _email, password) => {
    
    const user = await db.Usuarios.findOne({ where: {email: _email} });

    if (!user) {
        return null;
    }

    if (!user.isValidPassword(password)) {
        return null;
    }

    const {
        id,
        name,
        username,
        email,
    } = user;

    return {
        id,
        name,
        username,
        email,
    }
}