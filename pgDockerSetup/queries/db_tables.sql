-- -- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- -- SET time_zone = "+00:00";

-- -- Por si es necesario
-- DROP TABLE IF EXISTS credencial;
-- DROP TABLE IF EXISTS servicio;

-- -- CreateTable
-- CREATE TABLE "credencial" (
--     "id" SERIAL NOT NULL,
--     "passHash" TEXT NOT NULL,
--     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     "updatedAt" TIMESTAMP(3) NOT NULL,

--     CONSTRAINT "credencial_pkey" PRIMARY KEY ("id")
-- );

-- -- CreateTable
-- CREATE TABLE "servicio" (
--     "id" SERIAL NOT NULL,
--     "descripcion" TEXT NOT NULL,
--     "valor_unitario" INTEGER NOT NULL,
--     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     "updatedAt" TIMESTAMP(3) NOT NULL,

--     CONSTRAINT "servicio_pkey" PRIMARY KEY ("id")
-- );


-- --------------------------------------------------------------------------------
-- -- INSERTING FIRST DATA

-- DATOS PROVEEDOR
-- INSERT INTO proveedor (razon_social, rut, giro, direccion, telefono, email, ciudad, created_at, updated_at) VALUES ('INVEN369 SPA', '76.499.126-5', 'Mantenimiento, Reparacion Maquinarias', 'Pan de Azucar 970', 997952433, 'orojash@proton.me', 'Coquimbo', '02-02-2023_15:09', '02-02-2023_15:09');

-- EJEMPLOS SERVICIOS OFRECIDOS
-- INSERT INTO servicio (descripcion, valor_unitario, created_at, updated_at) VALUES ('Engrase general ,cambio grasera', 40000, '02-02-2023_16:05', '02-02-2023_16:05');
-- INSERT INTO servicio (descripcion, valor_unitario, created_at, updated_at) VALUES ('Regulacion varillaje mecanismo embrague , revision rodamiento empuje', 20000, '02-02-2023_16:05', '02-02-2023_16:05');
-- INSERT INTO servicio (descripcion, valor_unitario, created_at, updated_at) VALUES ('Engrase general regulacion frenos', 50000, '02-02-2023_16:05', '02-02-2023_16:05');


-- COMMIT;