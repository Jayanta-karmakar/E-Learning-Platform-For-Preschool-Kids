-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2023 at 08:17 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mca_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_details`
--

CREATE TABLE `admin_details` (
  `email` varchar(255) NOT NULL,
  `password` varchar(23) NOT NULL,
  `name` char(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_details`
--

INSERT INTO `admin_details` (`email`, `password`, `name`) VALUES
('shreya123@gmail.com', 'Shreya123', 'Shreya');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `name` varchar(23) NOT NULL,
  `email` varchar(23) NOT NULL,
  `password` varchar(8) NOT NULL,
  `grade` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`name`, `email`, `password`, `grade`) VALUES
('Updated', 'Adrr@gmail.com', 'huhu', 'A'),
('Moumita', 'asdrd4@gmail.com', 'gygggggg', ''),
('ss', 'avd@gmail.com', 'hyu78ff', ''),
('Banti Karmakar', 'Banti123@gmail.com', '009uuyy', ''),
('PP', 'fgt@gmail.com', 'huhh7', ''),
('JK', 'huhh@gmail.com', 'huhhh777', ''),
('shreya', 'huyy7@gmail.com', 'hyhuu8', ''),
('Suvendu', 'hyh@gmail.com', 'hyh7788', ''),
('Monti Roy', 'montiRoy67@gmail.com', 'hyh77', ''),
('Banti Karmakar', 'Sess444@gmail.com', 'huh78', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_details`
--
ALTER TABLE `admin_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
