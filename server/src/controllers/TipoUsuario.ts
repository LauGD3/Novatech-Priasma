import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createOne = async (req: Request, res: Response) => {
  const { tipoUsuairo } = req.body;
  
  const result = await prisma.tipoDocumento.create({
    data: tipoUsuairo
  });

  if(result != null) {
    return res.status(201).json(result);
  }
}

export const findAll = async (req: Request, res: Response) => {
  const result = await prisma.tipoDocumento.findMany();
  
  return res.status(200).json({result});
}

export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });

  if(result != null) {
    return res.status(202).json({ result });
  } else{ 
    return res.status(404).json({ message: `Data with id: ${id} do not exist` });
  }
}

export const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tipoUsuairo } = req.body;

  const data = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });

  if(data != null) {
    const result = await prisma.tipoDocumento.update({
      where: {
        idTipoDocumento: parseInt(id)
      },
      data: tipoUsuairo
    });

    return res.status(202).json({ message: 'Data was updated', data });
  } else {
    return res.status(404).json({message: `Data with id: ${id} do not exist`})
  }
  
}

export const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const data = await prisma.tipoDocumento.findUnique({
    where: {
      idTipoDocumento: parseInt(id)
    }
  });
  
  if(data != null) {
    const result = await prisma.tipoDocumento.delete({
      where: {
        idTipoDocumento: parseInt(id)
      }
    });
  
    return res.status(202).json({ message: 'Data was deleted'});
  } else {
    return res.status(404).json({message: `Data with id: ${id} do not exist`})
  }
}