import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const {atoken}=req.headers;
        if (!atoken) {
            return res.json({ success: false, message: 'No token provided' });
        }
        // Verify the token
        const tokenDecoded = jwt.verify(atoken, process.env.JWT_SECRET);
        
        // Check if the token contains correct admin email
        if (tokenDecoded.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: 'Invalid token' });
        }

        // Move to the next middleware
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authAdmin;