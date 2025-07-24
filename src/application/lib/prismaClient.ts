//Singleton -> algo onde a instancia vai ser criada uma única vez

import { PrismaClient } from "../../generated/prisma";

export const prismaClient = new PrismaClient();
