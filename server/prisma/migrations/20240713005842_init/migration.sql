-- CreateTable
CREATE TABLE `TipoUsuario` (
    `idTipoUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoUsuario` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`idTipoUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoDocumento` (
    `idTipoDocumento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoDoc` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`idTipoDocumento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoServicio` (
    `idTipoServicio` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoServicio` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idTipoServicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persona` (
    `idPersona` INTEGER NOT NULL AUTO_INCREMENT,
    `pNombre` VARCHAR(20) NOT NULL,
    `sNombre` VARCHAR(20) NULL,
    `pApellido` VARCHAR(20) NOT NULL,
    `sApellido` VARCHAR(20) NULL,
    `documento` VARCHAR(20) NOT NULL,
    `tipoDocumento` INTEGER NOT NULL,

    PRIMARY KEY (`idPersona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL,
    `correo` VARCHAR(200) NOT NULL,
    `clave` VARCHAR(500) NOT NULL,
    `tipoUsuario` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_idUsuario_key`(`idUsuario`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipo` (
    `idEquipo` INTEGER NOT NULL AUTO_INCREMENT,
    `descripProblema` VARCHAR(500) NOT NULL,
    `propietario` INTEGER NOT NULL,

    PRIMARY KEY (`idEquipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servicio` (
    `idServicio` INTEGER NOT NULL AUTO_INCREMENT,
    `decripcion` VARCHAR(500) NOT NULL,
    `equipoAreparar` INTEGER NOT NULL,
    `tipoServicio` INTEGER NOT NULL,
    `tecnicoEncargado` INTEGER NOT NULL,

    PRIMARY KEY (`idServicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleFactura` (
    `idDetalleFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `costoServicio` DOUBLE NOT NULL,
    `servicio` INTEGER NOT NULL,

    PRIMARY KEY (`idDetalleFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Factura` (
    `idFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `costo` DOUBLE NOT NULL,
    `estado` ENUM('enProceso', 'terminado') NOT NULL,
    `cliente` INTEGER NOT NULL,
    `detalleFactura` INTEGER NOT NULL,

    PRIMARY KEY (`idFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Persona` ADD CONSTRAINT `Persona_tipoDocumento_fkey` FOREIGN KEY (`tipoDocumento`) REFERENCES `TipoDocumento`(`idTipoDocumento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_tipoUsuario_fkey` FOREIGN KEY (`tipoUsuario`) REFERENCES `TipoUsuario`(`idTipoUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_propietario_fkey` FOREIGN KEY (`propietario`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_equipoAreparar_fkey` FOREIGN KEY (`equipoAreparar`) REFERENCES `Equipo`(`idEquipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_tipoServicio_fkey` FOREIGN KEY (`tipoServicio`) REFERENCES `TipoServicio`(`idTipoServicio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_tecnicoEncargado_fkey` FOREIGN KEY (`tecnicoEncargado`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_servicio_fkey` FOREIGN KEY (`servicio`) REFERENCES `Servicio`(`idServicio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_cliente_fkey` FOREIGN KEY (`cliente`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_detalleFactura_fkey` FOREIGN KEY (`detalleFactura`) REFERENCES `DetalleFactura`(`idDetalleFactura`) ON DELETE RESTRICT ON UPDATE CASCADE;
