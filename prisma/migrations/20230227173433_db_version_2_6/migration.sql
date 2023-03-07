/*
  Warnings:

  - You are about to drop the `servicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `servicio_solicitado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "servicio_solicitado" DROP CONSTRAINT "servicio_solicitado_cotizacion_id_fkey";

-- DropForeignKey
ALTER TABLE "servicio_solicitado" DROP CONSTRAINT "servicio_solicitado_servicio_id_fkey";

-- DropTable
DROP TABLE "servicio";

-- DropTable
DROP TABLE "servicio_solicitado";

-- CreateTable
CREATE TABLE "servicio_realizado" (
    "id" SERIAL NOT NULL,
    "detalle_servicio" TEXT NOT NULL,
    "equipo" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "info_adicional" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "fecha_realizacion" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "servicio_realizado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_mCotizacion_mServiciosRealizados" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_mCotizacion_mServiciosRealizados_AB_unique" ON "_mCotizacion_mServiciosRealizados"("A", "B");

-- CreateIndex
CREATE INDEX "_mCotizacion_mServiciosRealizados_B_index" ON "_mCotizacion_mServiciosRealizados"("B");

-- AddForeignKey
ALTER TABLE "_mCotizacion_mServiciosRealizados" ADD CONSTRAINT "_mCotizacion_mServiciosRealizados_A_fkey" FOREIGN KEY ("A") REFERENCES "cotizacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mCotizacion_mServiciosRealizados" ADD CONSTRAINT "_mCotizacion_mServiciosRealizados_B_fkey" FOREIGN KEY ("B") REFERENCES "servicio_realizado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
