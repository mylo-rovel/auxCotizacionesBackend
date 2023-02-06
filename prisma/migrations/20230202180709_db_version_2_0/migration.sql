/*
  Warnings:

  - You are about to drop the column `createdAt` on the `acceso` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `acceso` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cliente` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `cotizacion` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cotizacion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `credencial` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `credencial` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `proveedor` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `proveedor` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `servicio` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `servicio` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `servicio_solicitado` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `servicio_solicitado` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `acceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `acceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `cotizacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cotizacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `credencial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `credencial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `servicio_solicitado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `servicio_solicitado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "acceso" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "cliente" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "cotizacion" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "credencial" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "proveedor" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "servicio" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "servicio_solicitado" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;
