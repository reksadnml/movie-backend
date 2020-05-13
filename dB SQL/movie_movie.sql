-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: movie
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `movieName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `categoryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES ('06cc24f0-942e-11ea-9e9d-f116ca83deda','Teletabis 2','Film','Nais','2020-05-12 08:53:19','2020-05-12 08:54:45','2020-05-12 08:54:45','85856230-86c2-11ea-bbec-d1cfc9b33a32',''),('07c55200-942e-11ea-9e9d-f116ca83deda','Teletabis','Film','Nais','2020-05-12 08:53:20','2020-05-12 08:53:38','2020-05-12 08:53:38','85856230-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('1f701620-942d-11ea-9e9d-f116ca83deda','Teletabis','Film','Nais','2020-05-12 08:46:51','2020-05-12 08:47:05','2020-05-12 08:47:05','85856230-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('21186ef0-942d-11ea-9e9d-f116ca83deda','Teletabis','Film','Nais','2020-05-12 08:46:53','2020-05-12 08:47:24','2020-05-12 08:47:24','85856230-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('26880f40-94f9-11ea-b63a-f15d585512e9','dddd','Bagus','Alur cerita yang sangat bagus. Sangat menyentuh.','2020-05-13 09:07:20','2020-05-13 09:08:35','2020-05-13 09:08:35','85856230-86c2-11ea-bbec-d1cfc9b33a32',''),('29225640-9024-11ea-a0d4-a5a7a1a2bb29','Sinister','Film horror supernatural tahun 2012 yang di sutradarai oleh Scott Derrickson dan di tulis oleh Derrickson dan juga C. Robert Cargil','Alur sulit untuk ditebak. Sehingga menarik','2020-05-07 05:32:37','2020-05-10 07:06:09',NULL,'85856230-86c2-11ea-bbec-d1cfc9b33a32','https://images-na.ssl-images-amazon.com/images/I/81mfiTrZsFL._AC_SL1500_.jpg'),('29cae290-92a6-11ea-87e7-874998206570','The Fault In Our Stars','Film drama romantis Amerika Serikat tahun 2014 yang disutradarai oleh Josh Boone dan diproduseri oleh Marty Bowen dan Wyck Godfrey.','Alur cerita yang sangat bagus. Sangat menyentuh.','2020-05-10 10:08:15','2020-05-11 03:56:08','2020-05-11 03:56:08','8597ffd0-86c2-11ea-bbec-d1cfc9b33a32','https://hardrockfm.com/wp-content/uploads/2014/02/images_2014_OR_The-Fault-in-Our-Stars-2014-movie-Wallpaper-1280x800-1000x625.jpg'),('3324f5b0-9431-11ea-9e9d-f116ca83deda','Teletabis','Film','Nais','2020-05-12 09:16:02','2020-05-12 09:17:19','2020-05-12 09:17:19','85856230-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('345fe6b0-9431-11ea-9e9d-f116ca83deda','Teletabis','Film','Nais','2020-05-12 09:16:04','2020-05-12 09:17:42','2020-05-12 09:17:42','85856230-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('6829f790-9465-11ea-8ff1-6f12e57b86a3','Teletabis 2','Film','Nais','2020-05-12 15:29:44','2020-05-12 15:30:45','2020-05-12 15:30:45','85856230-86c2-11ea-bbec-d1cfc9b33a32',''),('7c6307b0-936b-11ea-9d45-c9137b15c971','The Fault in Our Stars','Film drama romantis Amerika Serikat tahun 2014 yang disutradarai oleh Josh Boone dan diproduseri oleh Marty Bowen dan Wyck Godfrey.','Alur cerita yang sangat bagus. Sangat menyentuh.','2020-05-11 09:40:44','2020-05-11 09:40:44',NULL,'8597ffd0-86c2-11ea-bbec-d1cfc9b33a32','https://image.winudf.com/v2/image1/Y29tLmZhdWx0LnN0YXJzX3NjcmVlbl8wXzE1NTUxODg5ODJfMDQy/screen-0.jpg?fakeurl=1&type=.jpg'),('85b41350-86c2-11ea-bbec-d1cfc9b33a32','Danur','Diangkat dari buku karya Risa Saraswati','Membuat jantung berdegup kencang','2020-04-25 07:01:01','2020-04-25 07:01:01',NULL,'85856230-86c2-11ea-bbec-d1cfc9b33a32','https://i.ytimg.com/vi/bMQrdGnYX9E/maxresdefault.jpg'),('85cacfa0-86c2-11ea-bbec-d1cfc9b33a32','Habibie Ainun','Diangkat dari kisah nyata tentang cinta Habibie dan Ainun','Film ini memilki alur yang bagus','2020-04-25 07:01:01','2020-05-11 09:35:47','2020-05-11 09:35:47','8597ffd0-86c2-11ea-bbec-d1cfc9b33a32','https://cdn2.tstatic.net/lampung/foto/bank/images/download-film-habibie-dan-ainun-film-indonesia-2019-streaming-langsung-via-ponsel.jpg'),('860e8f60-86c2-11ea-bbec-d1cfc9b33a32','Mission Impossible : Fallout','Dibintangi oleh Tom Cruise','Tidak diragukan lagi kualitas film dari Mission Impossible','2020-04-25 07:01:01','2020-05-11 09:36:17','2020-05-11 09:36:17','8540df20-86c2-11ea-bbec-d1cfc9b33a32','https://cdn2.tstatic.net/jatim/foto/bank/images2/mission-impossible-fallout-tom-cruise_20180726_125918.jpg'),('860ed5b0-8c21-11ea-9128-995bea90f1f2','Habibie dan Ainun 3','Kisah Ainun pada masa remaja','Sangat bagus dan menyentuh','2020-05-02 03:03:39','2020-05-02 03:03:39',NULL,'8597ffd0-86c2-11ea-bbec-d1cfc9b33a32','https://i.ytimg.com/vi/7uV166LCp10/maxresdefault.jpg'),('87e80ba0-93fa-11ea-9eeb-09f4a8e4abfd','Mission Impossible - Fallout','Ketika sebuah misi IMF berjalan di luar rencana, keselamatan dunia terancam','Action yang menegangkan','2020-05-12 02:44:41','2020-05-12 02:44:41',NULL,'8540df20-86c2-11ea-bbec-d1cfc9b33a32','https://i.ytimg.com/vi/yfgfW45LRIg/hqdefault.jpg'),('894e7a00-9469-11ea-8ff1-6f12e57b86a3','Scarlet Heart Ryeo my lop ueuwuwu','iu love lee jun ki yongwoni','die for this drama','2020-05-12 15:59:18','2020-05-12 16:11:40','2020-05-12 16:11:40','8597ffd0-86c2-11ea-bbec-d1cfc9b33a32','https://www.wowkeren.com/images/news/00128813.jpg'),('a58f90f0-942d-11ea-9e9d-f116ca83deda','Teletabis','Bagus','Nais','2020-05-12 08:50:36','2020-05-12 08:50:53','2020-05-12 08:50:53','8540df20-86c2-11ea-bbec-d1cfc9b33a32','https://www.google.com/search?q=habibie+ainun+3&safe=strict&rlz=1C1CHBF_enID880ID880&sxsrf=ALeKk01TKAbe_dUjL_ZjyNN4TM_YB1PT9w:1588385213229&source=lnms&tbm=isch&sa=X&ved=2ahUKEwirp5qDjJTpAhV1zTgGHbcGBqMQ_AUoAXoECBkQAw&biw=1366&bih=657#imgrc=LbjEFlvA6CpbRM'),('a6a23970-942d-11ea-9e9d-f116ca83deda','Teletabis','Bagus','Nais','2020-05-12 08:50:37','2020-05-12 08:51:11','2020-05-12 08:51:11','8540df20-86c2-11ea-bbec-d1cfc9b33a32','https://www.google.com/search?q=habibie+ainun+3&safe=strict&rlz=1C1CHBF_enID880ID880&sxsrf=ALeKk01TKAbe_dUjL_ZjyNN4TM_YB1PT9w:1588385213229&source=lnms&tbm=isch&sa=X&ved=2ahUKEwirp5qDjJTpAhV1zTgGHbcGBqMQ_AUoAXoECBkQAw&biw=1366&bih=657#imgrc=LbjEFlvA6CpbRM'),('b783f590-8dbf-11ea-88d3-e722ad098a41','The Bourne Identity','Film ini merupakan adaptasi dari novel Robert Ludlum','Action yang menegangkan','2020-05-04 04:28:34','2020-05-04 04:28:34',NULL,'8540df20-86c2-11ea-bbec-d1cfc9b33a32','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAqIDMschs6uUH1ouSIMSea0hfgXc0jpjRfK-k1xu7WzNk-Ye0&usqp=CAU');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-13 16:27:44
