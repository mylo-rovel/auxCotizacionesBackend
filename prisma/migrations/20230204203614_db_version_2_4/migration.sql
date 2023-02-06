/*
  Warnings:

  - Added the required column `anulada` to the `cotizacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cotizacion" ADD COLUMN     "anulada" BOOLEAN NOT NULL;
