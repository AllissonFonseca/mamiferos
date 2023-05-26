import { prisma } from "../services/prisma";

export const createMamifero = async(data:any) => {
    const mamifero = await prisma.mamifero.create({
        data,
        select: {
            nome: true,
            descricao:true,
            peso: true,
            herbivoro: true
        }
    })

    return data;
};

export const getAll = async() => {
    const mamifero = await prisma.mamifero.findMany({
        select: {
            id: true,
            nome: true,
            descricao:true,
            peso: true,
            herbivoro: true
        }
    })

    return mamifero;
};

export const getByString = async (data: string) => {
    const mamifero = await prisma.mamifero.findMany({
      where: {
        OR: [
          { nome: { contains: data } }, 
          { descricao: { contains: data } }, 
        ],
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        peso: true,
        herbivoro: true
      },
    });

    return mamifero;
  };

export const update = async(id:number, data:any) => {
    const mamifero = await prisma.mamifero.update({
        where: {
            id
        } ,
        data,
        select: {
            id: true,
            nome: true,
            descricao:true,
            peso:true,
            herbivoro:true
        }
    })

    return  mamifero;
};

export const delect = async(id:any) => {
    await prisma.mamifero.delete({
        where: {
            id
        }
    })

    return
};