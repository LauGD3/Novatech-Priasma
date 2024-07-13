import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { hashPassword } from "../helpers/bcrypt.helper";

const prisma = new PrismaClient();

export const createOne = async (req: Request, res: Response) => {
  const { pNombre, sNombre, pApellido, sApellido, documento, tipoDocumento, correo, clave, tipoUsuario } = req.body
  const passwordHash = await hashPassword(clave);
  
  try {
    const result = prisma.$transaction(async (prisma) => {
      const persona = await prisma.persona.create({
        data: {
          pNombre, 
          sNombre, 
          pApellido, 
          sApellido, 
          documento, 
          tipoDocumento
        }
      });

      const usuario = await prisma.usuario.create({
        data: {
          idUsuario: persona.idPersona,
          correo,
          clave: passwordHash,
          tipoUsuario
        }
      });
    });
    
    return res.status(201).json({ message: 'the data was created ', result})
  } catch(error) {
    res.status(500).json({ error: 'Error creating data', details: error })
  }
  
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const result = await prisma.persona.findMany({
      select: {
        pNombre: true,
        sNombre: true,
        pApellido: true,
        sApellido: true,
        documento: true,
        tipoDocRel: {
          select: {
            tipoDoc: true
          }
        },
        user: {
          select: {
            correo: true,
            clave: true,
            tipoUs: {
              select: {
                tipoUsuario: true
              }
            }
          }
        }
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data', details: error })
  }
}

export const findOne = async (req: Request, res: Response) => {
  
}

export const updateOne = async (req: Request, res: Response) => {
    
}

export const deleteOne = async (req: Request, res: Response) => {
  
}