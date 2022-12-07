import bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { IUsers, Users } from '../models/User';

const secret = 'Manthano';

export const hashPassword = async (plainTextPassword: string) => {
    const saltRound = 12;
    const hash = await bcrypt.hash(plainTextPassword, saltRound);
    return hash;
}

export const comparePasswords = async (plainTextPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainTextPassword, hashPassword);
}

export const signUserToken = async (user: IUsers) => {
    let token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '1hr' }
    );
    return token;
}

export const verifyUser = async (req: Request) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            let decoded: any = await jwt.verify(token, secret);
            return await Users.findById(decoded.userId);
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }
}