SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE `cnab`;
USE `cnab`;

CREATE TABLE `remessas` (
  `id` text NOT NULL,
  `type` text NOT NULL,
  `date` text NOT NULL,
  `amount` text NOT NULL,
  `taxId` text NOT NULL,
  `card` text NOT NULL,
  `hour` text NOT NULL,
  `owner` text NOT NULL,
  `shop` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `shops` (
  `id` text NOT NULL,
  `taxId` text NOT NULL,
  `owner` text NOT NULL,
  `shop` text NOT NULL,
  `amount` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `shops` (
	  `id`,
    `taxId`,
    `owner`,
    `shop`,
    `amount`
) VALUES (
	  'd2517b3a-559a-40cf-a361-2df992037675',
    '09620676017',
    'JOÃO MACEDO',
    'BAR DO JOÃO',
    '10000.00'
);

INSERT INTO `shops` (
    `id`,
    `taxId`,
    `owner`,
    `shop`,
    `amount`
) VALUES (
    'c85f4270-29b8-40e1-9fd7-831a75dcf423',
    '84515254073',
    'MARCOS PEREIRA',
    'MERCADO DA AVENIDA',
    '10000.00'
);

INSERT INTO `shops` (
    `id`,
    `taxId`,
    `owner`,
    `shop`,
    `amount`
) VALUES (
    '8b3cf52a-41d2-4fcf-97e0-d4676c0f68c4',
    '23270298056',
    'JOSÉ COSTA',
    'MERCEARIA 3 IRMÃOS',
    '10000.00'
);

INSERT INTO `shops` (
    `id`,
    `taxId`,
    `owner`,
    `shop`,
    `amount`
) VALUES (
    '14094a78-54aa-4c64-ae97-a1bca3331207',
    '55641815063',
    'MARIA JOSEFINA',
    'LOJA DO Ó - MATRIZ',
    '10000.00'
);
