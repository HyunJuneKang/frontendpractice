/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.4.12-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: frontendpractice
-- ------------------------------------------------------
-- Server version	11.4.12-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `skill_action`
--

DROP TABLE IF EXISTS `skill_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_action` (
  `action_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `skill_type` varchar(30) NOT NULL,
  `action_name` varchar(100) NOT NULL,
  `required_level` int(11) NOT NULL,
  `gain_exp` int(11) NOT NULL,
  `gain_item_id` bigint(20) NOT NULL,
  `gain_item_amount` int(11) NOT NULL,
  PRIMARY KEY (`action_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_action`
--

LOCK TABLES `skill_action` WRITE;
/*!40000 ALTER TABLE `skill_action` DISABLE KEYS */;
INSERT INTO `skill_action` VALUES
(1,'woodcutting','참나무',1,10,51,1),
(2,'woodcutting','야자수',10,20,52,1),
(3,'woodcutting','트리',20,30,53,1),
(4,'woodcutting','침엽수',30,40,54,1),
(5,'fishing','강낚시',1,10,61,1),
(6,'fishing','연못낚시',5,18,62,1),
(7,'fishing','바다낚시',12,35,63,1),
(8,'fishing','심해낚시',25,70,64,1),
(9,'mining','돌 채광',1,10,71,1),
(10,'mining','구리 채광',5,18,72,1),
(11,'mining','철 채광',12,35,73,1),
(12,'mining','금 채광',25,70,74,1),
(13,'cooking','생선 굽기',1,10,81,1),
(14,'cooking','새우 요리',5,18,82,1),
(15,'cooking','스테이크 굽기',12,35,83,1),
(16,'cooking','특제 요리',25,70,84,1);
/*!40000 ALTER TABLE `skill_action` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-07-08  0:42:25
