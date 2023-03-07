/*
  Warnings:

  - You are about to drop the `_mCotizacion_mServiciosRealizados` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_mCotizacion_mServiciosRealizados" DROP CONSTRAINT "_mCotizacion_mServiciosRealizados_A_fkey";

-- DropForeignKey
ALTER TABLE "_mCotizacion_mServiciosRealizados" DROP CONSTRAINT "_mCotizacion_mServiciosRealizados_B_fkey";

-- DropTable
DROP TABLE "_mCotizacion_mServiciosRealizados";

-- CreateTable
CREATE TABLE "servicio_por_cotizacion" (
    "id" SERIAL NOT NULL,
    "cotizacion_id" INTEGER NOT NULL,
    "servicio_id" INTEGER NOT NULL,

    CONSTRAINT "servicio_por_cotizacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicio_por_cotizacion" ADD CONSTRAINT "servicio_por_cotizacion_cotizacion_id_fkey" FOREIGN KEY ("cotizacion_id") REFERENCES "cotizacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicio_por_cotizacion" ADD CONSTRAINT "servicio_por_cotizacion_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicio_realizado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
