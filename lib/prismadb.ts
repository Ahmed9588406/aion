import { PrismaClient } from "@prisma/client";

//  Prisma is an Object-Relational Mapping (ORM) tool that simplifies database interactions in a TypeScript or JavaScript project

/*
Declares a variable globalForPrisma of type { prisma: PrismaClient | undefined }.
This variable is used to store the PrismaClient globally, making it accessible throughout the application
*/
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

/*
prismadb is exported and serves as the instance of the PrismaClient that will be used for database operations.
The globalForPrisma.prisma ?? new PrismaClient expression checks if globalForPrisma.prisma is already defined.
If it is, it uses the existing instance; otherwise, it creates a new instance of PrismaClient.
The log option is set based on the environment. In development, it logs queries, errors, and warnings. In other environments, it logs only errors

*/
export const prismadb = globalForPrisma.prisma ?? new PrismaClient ({
    log:process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
})

// In non-production environments, it sets globalForPrisma.prisma to the prismadb instance. This ensures that there is a single global instance of PrismaClient in development and testing environments
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb