import jwt from 'jsonwebtoken';

const authDoctor = async (req, res, next) => {
    try {
        const {dtoken}=req.headers;
        if (!dtoken) {
            return res.json({ success: false, message: 'No token provided' });
        }
        // Verify the token
        const tokenDecoded = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body.docId = tokenDecoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authDoctor;