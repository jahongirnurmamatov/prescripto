import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const {token}=req.headers;
        if (!token) {
            return res.json({ success: false, message: 'No token provided' });
        }
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authUser;