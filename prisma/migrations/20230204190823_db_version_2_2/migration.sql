/*
  Warnings:

  - A unique constraint covering the columns `[rut]` on the table `cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cliente_rut_key" ON "cliente"("rut");
