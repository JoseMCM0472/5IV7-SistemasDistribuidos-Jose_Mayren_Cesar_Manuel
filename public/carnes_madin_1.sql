/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ carnes_madin_1 /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE carnes_madin_1;

DROP TABLE IF EXISTS carrito;
CREATE TABLE `carrito` (
  `id` int(11) DEFAULT NULL,
  `nombreDeUsuario` varchar(30) DEFAULT NULL,
  `producto` varchar(20) DEFAULT NULL,
  `precio` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS productos;
CREATE TABLE `productos` (
  `id` int(11) DEFAULT NULL,
  `producto` varchar(20) DEFAULT NULL,
  `precio` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE `usuarios` (
  `id` int(11) DEFAULT NULL,
  `nombreDeUsuario` varchar(30) DEFAULT NULL,
  `contraseña` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO usuarios(id,nombreDeUsuario,contraseña) VALUES(NULL,'a',20),(NULL,'a',20);