import { Request, Response } from 'express';
import * as userModel from '../models/userModel';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try{
        const users = await userModel.findAllUsers();
        res.status(200).json(users)
    } catch (error){
        res.json(500).json({ error: 'Failed to retrive users'});
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try{
        const user = await userModel.findUserById(id);
        if(user){
            res.status(200).json(user)
        } else{
            res.status(404).json({error: 'User not found'})
        }
        
    } catch (error){
        res.json(500).json({ error: 'Failed to retrive user'});
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try{
        const user = await userModel.createUser(req.body);
        res.status(200).json(user)
    } catch (error){
        res.json(500).json({ error: 'Failed to retrive users'});
    }
};

// app.put ('/usuarios/:id', async (req: Request, res: Response)=> {
   
//     await prisma.user.update({
//         where: {
//             id: req.params.id
//         },
//         data: {
//             email: req.body.email,
//             name: req.body.name,
//             password: req.body.password,
//             isAdmin: req.body.isAdmin
//         }
//     })
//         res.status(200).json(req.body)
//     })

//     app.delete ('/usuarios/:id', async (req: Request, res: Response)=> {
   
//         await prisma.user.delete({
//             where: {
//                 id: req.params.id
//             },
//         })
//             res.status(200).json({message: 'Usuário deletado com Sucesso!'})
//         })

//         app.get ('/questions', async (req: Request, res: Response) => {
//             const questions = await prisma.question.findMany({include: {answers: true}})
//             res.status(200).json(questions)
//         })