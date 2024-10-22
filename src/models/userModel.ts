import prisma from '../prisma';
import { User } from '@prisma/client'

export const findAllUsers = async (): Promise<User[]> => {
    return await prisma.user.findMany ();
};

export const findUserById = async (id: string): Promise<User| null> => {
    return await prisma.user.findUnique({
        where: {id},
    });
};

export const createUser = async (data: Omit<User, 'id'>): Promise<User> => {
    return await prisma.user.create({
        data,
    });
};