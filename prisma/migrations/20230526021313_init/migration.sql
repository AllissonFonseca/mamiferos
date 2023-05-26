-- CreateTable
CREATE TABLE "Mamifero" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "herbivoro" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Mamifero_pkey" PRIMARY KEY ("id")
);
