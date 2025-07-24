//Singleton -> algo onde a instancia vai ser criada uma única vez

import { PrismaClient } from "@prisma/client/extension";

export const prismaClient = new PrismaClient();
