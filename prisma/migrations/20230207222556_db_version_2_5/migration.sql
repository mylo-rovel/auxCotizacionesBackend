-- DropForeignKey
ALTER TABLE "servicio_solicitado" DROP CONSTRAINT "servicio_solicitado_servicio_id_fkey";

-- AddForeignKey
ALTER TABLE "servicio_solicitado" ADD CONSTRAINT "servicio_solicitado_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
