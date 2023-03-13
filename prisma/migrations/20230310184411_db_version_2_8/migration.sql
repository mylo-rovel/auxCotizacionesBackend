/*
  Warnings:

  - Added the required column `created_at` to the `servicio_por_cotizacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `servicio_por_cotizacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servicio_por_cotizacion" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "agrupacion_trabajos" (
    "id" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "agrupacion_trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_mAgrupaciones_mServiciosRealizados" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_mAgrupaciones_mServiciosRealizados_AB_unique" ON "_mAgrupaciones_mServiciosRealizados"("A", "B");

-- CreateIndex
CREATE INDEX "_mAgrupaciones_mServiciosRealizados_B_index" ON "_mAgrupaciones_mServiciosRealizados"("B");

-- AddForeignKey
ALTER TABLE "_mAgrupaciones_mServiciosRealizados" ADD CONSTRAINT "_mAgrupaciones_mServiciosRealizados_A_fkey" FOREIGN KEY ("A") REFERENCES "agrupacion_trabajos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mAgrupaciones_mServiciosRealizados" ADD CONSTRAINT "_mAgrupaciones_mServiciosRealizados_B_fkey" FOREIGN KEY ("B") REFERENCES "servicio_realizado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
