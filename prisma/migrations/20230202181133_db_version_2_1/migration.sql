/*
  Warnings:

  - A unique constraint covering the columns `[razon_social]` on the table `proveedor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rut]` on the table `proveedor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `proveedor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "proveedor_razon_social_key" ON "proveedor"("razon_social");

-- CreateIndex
CREATE UNIQUE INDEX "proveedor_rut_key" ON "proveedor"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "proveedor_email_key" ON "proveedor"("email");
