const jwt = require('jsonwebtoken');
const {secret} = require("../config");

module.exports = (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: 'User not authorized'});
            }
            const {roles: userRoles} = jwt.verify(token, secret);
            const hasRole = userRoles.some(userRole => roles.some(role => role === userRole));
            if (!hasRole) {
                return res.status(403).json({message: 'User dont have access'});
            }
            next();
        } catch (e) {
            console.log(e);
            return res.status(403).json({message: 'User not authorized'});
        }
    }
}