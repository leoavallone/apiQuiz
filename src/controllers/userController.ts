import { Request, Response } from "express";
import userService from "../services/userService";

const getUsers = async (_req: Request, res: Response) => {
    try{
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (error){
        res.json(500).json({ error: 'Failed to retrive users'});
    }
};

const createUser = async (req: Request, res: Response) => {
    try{
        const { name, email, password, isAdmin } = req.body;
        const user = await userService.create({ name, email, password, isAdmin });
        res.status(201).json(user);
    } catch (error){
        res.json(500).json({ error: 'Failed to create users'});
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try{
        const user = await userService.findUserById(id);
        if(user){
            res.status(200).json(user)
        } else{
            res.status(404).json({error: 'User not found'})
        }
        
    } catch (error){
        res.json(500).json({ error: 'Failed to retrive user'});
    }
};

export default { getUsers, createUser, getUserById };
