import prisma from "../prisma";

const getAll = async () => {
  return prisma.user.findMany();
};

const create = async (data: { name: string; email: string, password: string, isAdmin: boolean }) => {
  return prisma.user.create({ data });
};

const findUserById = async (id: string) => {
    return prisma.user.findUnique({ where: { id }});
};

const findUserByEmail = async (email: string) => {
    return prisma.user.findUnique({ where: { email }});
};

const deleteUser = async (id: string) =>{
  return prisma.user.delete({where: {id}})
}
export default { 
    getAll, 
    create,
    findUserById,
    findUserByEmail,
    deleteUser
};