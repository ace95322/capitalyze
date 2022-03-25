-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2022 at 09:39 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `indieplu_ab`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `release_date` date NOT NULL,
  `artist_id` int(11) NOT NULL,
  `created_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isProduct` tinyint(1) NOT NULL DEFAULT 0,
  `isExclusive` tinyint(1) NOT NULL DEFAULT 0,
  `isExplicit` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `spotify_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soundcloud_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itunes_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezer_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `cover`, `release_date`, `artist_id`, `created_by`, `genre_id`, `isProduct`, `isExclusive`, `isExplicit`, `created_at`, `updated_at`, `spotify_link`, `soundcloud_link`, `youtube_link`, `itunes_link`, `deezer_link`) VALUES
(68790, 'Hiatus', '{\"path\":\"\\/covers\\/albums\\/50512261300-cover.jpg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/albums\\/50512261300-cover.jpg\"}', '2011-03-01', 0, 'admin', NULL, 1, 0, 0, '2021-10-15 21:28:44', '2021-10-18 06:43:51', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `album_artist`
--

CREATE TABLE `album_artist` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `funds` double(8,2) NOT NULL DEFAULT 0.00,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `displayname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `available_disk_space` bigint(20) NOT NULL DEFAULT 500,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `spotify_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soundcloud_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itunes_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezer_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `user_id`, `avatar`, `funds`, `firstname`, `lastname`, `displayname`, `address`, `country`, `email`, `phone`, `available_disk_space`, `created_at`, `updated_at`, `spotify_link`, `soundcloud_link`, `youtube_link`, `itunes_link`, `deezer_link`) VALUES
(4799, NULL, '{\"path\":\"\\/storage\\/defaults\\/images\\/artist_avatar.png\",\"disk\":\"public\",\"url\":null}', 0.00, 'Venita', 'Louis', 'Princess Digital', '5540 Claridge Cir', 'United States', 'indieplugmedia@gmail.com', '4042547728', 500, '2021-10-18 06:40:39', '2021-10-18 06:40:39', NULL, NULL, NULL, NULL, NULL),
(4800, 2, '{\"path\":\"\\/storage\\/defaults\\/images\\/artist_avatar.png\",\"disk\":\"s3\",\"url\":null}', 12.60, 'Joseph', 'Simmons', 'Silent G Mr.843', '5540 Claridge Cir', 'United States', 'indieplugmedia@gmail.com', '4042547728', 500, '2021-10-26 00:06:22', '2021-11-27 01:36:42', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `artist_song`
--

CREATE TABLE `artist_song` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `song_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `artist_song`
--

INSERT INTO `artist_song` (`id`, `artist_id`, `song_id`) VALUES
(1, '4799', '1687417'),
(2, '4799', '1687418'),
(3, '4800', '1687419'),
(5, '4800', '1687420');

-- --------------------------------------------------------

--
-- Table structure for table `artist_video`
--

CREATE TABLE `artist_video` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `artist_video`
--

INSERT INTO `artist_video` (`id`, `artist_id`, `video_id`) VALUES
(2, '4800', '1');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(10) UNSIGNED NOT NULL,
  `message_id` int(10) UNSIGNED NOT NULL,
  `session_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `read_at` datetime DEFAULT NULL,
  `type` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `download_count` bigint(20) NOT NULL DEFAULT 0,
  `source_format` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `podcast_id` int(11) NOT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` int(10) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `followed_source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `followed_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `followed_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friendships`
--

CREATE TABLE `friendships` (
  `id` int(10) UNSIGNED NOT NULL,
  `friend_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `slug`, `cover`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Electronic', 'electronic', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/electronic.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/dj.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Sound FX', 'sound-fx', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/sound-fx.jpg\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/noise.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Gaming', 'gaming', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/gaming.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/controller.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Piano', 'piano', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/piano.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/piano.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Chill', 'chill', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/chill.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/relax.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Jazz', 'jazz', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/jazz.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/horn.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(7, 'K Pop', 'k-pop', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/k-pop.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/headphone.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(8, 'Classical', 'classical', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/classical.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/guitar.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(9, 'Hip Hop', 'hip-hop', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/hip-hop.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/radio.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(10, 'Indie', 'indie', '{\"path\":\"\\/storage\\/defaults\\/images\\/genres\\/indie.png\",\"disk\":\"public\",\"url\":null}', '{\"path\":\"\\/storage\\/defaults\\/icons\\/microphone.svg\",\"disk\":\"public\",\"url\":null}', '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `genre_podcast`
--

CREATE TABLE `genre_podcast` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `podcast_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre_podcast`
--

INSERT INTO `genre_podcast` (`id`, `podcast_id`, `genre_id`, `created_at`, `updated_at`) VALUES
(1, 54564, 1, NULL, NULL),
(2, 54564, 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `genre_song`
--

CREATE TABLE `genre_song` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `song_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre_song`
--

INSERT INTO `genre_song` (`id`, `song_id`, `genre_id`, `created_at`, `updated_at`) VALUES
(1, 1687415, 9, NULL, NULL),
(2, 1687417, 9, NULL, NULL),
(3, 1687418, 9, NULL, NULL),
(4, 1687419, 9, NULL, NULL),
(6, 1687420, 9, NULL, NULL),
(7, 1687421, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `genre_video`
--

CREATE TABLE `genre_video` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `video_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre_video`
--

INSERT INTO `genre_video` (`id`, `video_id`, `genre_id`, `created_at`, `updated_at`) VALUES
(2, 1, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `flag` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isDeletable` tinyint(1) NOT NULL DEFAULT 1,
  `isDefault` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `locale`, `status`, `flag`, `isDeletable`, `isDefault`, `created_at`, `updated_at`) VALUES
(1, 'English', 'en', 1, 'usa', 0, 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Español', 'es', -1, 'spain', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Français', 'fr', -1, 'france', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Deutsch', 'de', -1, 'germany', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'العربية', 'ar', -1, 'uae', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'हिंदी', 'hi', -1, 'india', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(7, 'Italiano', 'it', -1, 'italy', 0, 0, '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `content_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`content_type`, `content_source`, `content_id`, `user_id`, `created_at`, `updated_at`) VALUES
('song', 'local', '1687415', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ltm_translations`
--

CREATE TABLE `ltm_translations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `locale` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `group` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `key` text COLLATE utf8mb4_bin NOT NULL,
  `value` text COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `ltm_translations`
--

INSERT INTO `ltm_translations` (`id`, `status`, `locale`, `group`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 1, 'en', '_json', 'Monetizing', 'Monetizing', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(2, 1, 'en', '_json', 'Content', 'Content', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(3, 1, 'en', '_json', 'Analytics', 'Analytics', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(4, 1, 'en', '_json', 'Translations', 'Translations', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(5, 1, 'en', '_json', 'Settings', 'Settings', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(6, 1, 'en', '_json', 'Members', 'Members', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(7, 1, 'en', '_json', 'Indie', 'Indie', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(8, 1, 'en', '_json', 'Hip Hop', 'Hip Hop', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(9, 1, 'en', '_json', 'Classical', 'Classical', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(10, 1, 'en', '_json', 'K Pop', 'K Pop', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(11, 1, 'en', '_json', 'Jazz', 'Jazz', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(12, 1, 'en', '_json', 'Chill', 'Chill', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(13, 1, 'en', '_json', 'Piano', 'Piano', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(14, 1, 'en', '_json', 'Gaming', 'Gaming', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(15, 1, 'en', '_json', 'Electronic', 'Electronic', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(16, 1, 'en', '_json', 'Charts', 'Charts', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(17, 1, 'en', '_json', 'Genres & Moods', 'Genres & Moods', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(18, 1, 'en', '_json', 'Explore and listen to various genres & moods', 'Explore and listen to various genres & moods', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(19, 1, 'en', '_json', 'Search', 'Search', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(20, 1, 'en', '_json', 'There is no content to be displayed', 'There is no content to be displayed', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(21, 1, 'en', '_json', 'No content!', 'No content!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(22, 1, 'en', '_json', 'Friends', 'Friends', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(23, 1, 'en', '_json', 'Explore', 'Explore', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(24, 1, 'en', '_json', 'Explore & enjoy listening to music', 'Explore & enjoy listening to music', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(25, 1, 'en', '_json', 'Most played songs', 'Most played songs', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(26, 1, 'en', '_json', 'No data to show yet!', 'No data to show yet!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(27, 1, 'en', '_json', 'Top Visiting Countries', 'Top Visiting Countries', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(28, 1, 'en', '_json', 'Interval', 'Interval', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(29, 1, 'en', '_json', 'Number of plays per interval', 'Number of plays per interval', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(30, 1, 'en', '_json', 'New this month', 'New this month', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(31, 1, 'en', '_json', 'Save Changes', 'Save Changes', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(32, 1, 'en', '_json', 'Appearance', 'Appearance', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(33, 1, 'en', '_json', 'Configuration', 'Configuration', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(34, 1, 'en', '_json', 'Podcast Genres', 'Podcast Genres', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(35, 1, 'en', '_json', 'Song Genres', 'Song Genres', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(36, 1, 'en', '_json', 'Podcasts', 'Podcasts', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(37, 1, 'en', '_json', 'Playlists', 'Playlists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(38, 1, 'en', '_json', 'Songs', 'Songs', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(39, 1, 'en', '_json', 'Albums', 'Albums', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(40, 1, 'en', '_json', 'Pages', 'Pages', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(41, 1, 'en', '_json', 'Your credentials are incorrect. Please try again', 'Your credentials are incorrect. Please try again.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(42, 1, 'en', '_json', 'Account already exists', 'Account already exists.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(43, 1, 'en', '_json', 'Logged out successfully', 'Logged out successfully.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(44, 1, 'en', '_json', 'Latest Podcasts', 'Latest Podcasts', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(45, 1, 'en', '_json', 'Popular Podcasts', 'Popular Podcasts', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(46, 1, 'en', '_json', 'Login', 'Login', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(47, 1, 'en', '_json', 'Logout', 'Logout', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(48, 1, 'en', '_json', 'Light Mode', 'Light Mode', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(49, 1, 'en', '_json', 'Dark Mode', 'Dark Mode', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(50, 1, 'en', '_json', 'Upgrade', 'Upgrade', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(51, 1, 'en', '_json', 'Friend Requests', 'Friend Requests', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(52, 1, 'en', '_json', 'New Releases', 'New Releases', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(53, 1, 'en', '_json', 'Plans', 'Plans', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(54, 1, 'en', '_json', 'Subscriptions', 'Subscriptions', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(55, 1, 'en', '_json', 'Advertisements', 'Advertisements', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(56, 1, 'en', '_json', 'New Translation', 'New Translation', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(57, 1, 'en', '_json', 'Add', 'Add', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(58, 1, 'en', '_json', 'Top', 'Top', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(59, 1, 'en', '_json', 'Artists', 'Artists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(60, 1, 'en', '_json', 'Users', 'Users', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(61, 1, 'en', '_json', 'Roles', 'Roles', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(62, 1, 'en', '_json', 'Last Year', 'Last Year', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(63, 1, 'en', '_json', 'Last Month', 'Last Month', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(64, 1, 'en', '_json', 'Last 7 days', 'Last 7 days', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(65, 1, 'en', '_json', 'Popular', 'Popular', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(66, 1, 'en', '_json', 'Top Visiting Browsers', 'Top Visiting Browsers', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(67, 1, 'en', '_json', 'Queue', 'Queue', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(68, 1, 'en', '_json', 'Download', 'Download', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(69, 1, 'en', '_json', 'Play Speed', 'Play Speed', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(70, 1, 'en', '_json', 'Next', 'Next', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(71, 1, 'en', '_json', 'Pause', 'Pause', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(72, 1, 'en', '_json', 'Rewind', 'Rewind', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(73, 1, 'en', '_json', 'Previous', 'Previous', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(74, 1, 'en', '_json', 'Shuffle', 'Shuffle', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(75, 1, 'en', '_json', 'Loop', 'Loop', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(76, 1, 'en', '_json', 'Play', 'Play', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(77, 1, 'en', '_json', 'Dislike', 'Dislike', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(78, 1, 'en', '_json', 'No', 'No', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(79, 1, 'en', '_json', 'Yes', 'Yes', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(80, 1, 'en', '_json', 'podcast', 'podcast', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(81, 1, 'en', '_json', 'episode', 'episode', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(82, 1, 'en', '_json', 'album', 'album', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(83, 1, 'en', '_json', 'Listening to', 'Listening to', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(84, 1, 'en', '_json', 'from', 'from', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(85, 1, 'en', '_json', 'by', 'by', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(86, 1, 'en', '_json', 'Are you sure you wanna be a friend with', 'Are you sure you wanna be a friend with', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(87, 1, 'en', '_json', 'You seem to be having no friends. Add some!', 'You seem to be having no friends. Add some!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(88, 1, 'en', '_json', 'No Friends!', 'No Friends!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(89, 1, 'en', '_json', 'Unfriend', 'Unfriend', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(90, 1, 'en', '_json', 'Listen', 'Listen', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(91, 1, 'en', '_json', 'Chat', 'Chat', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(92, 1, 'en', '_json', 'Profile', 'Profile', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(93, 1, 'en', '_json', 'Are you sure you wanna block', 'Are you sure you wanna block', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(94, 1, 'en', '_json', 'Block', 'Block', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(95, 1, 'en', '_json', 'Cancel', 'Cancel', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(96, 1, 'en', '_json', 'Seen', 'Seen', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(97, 1, 'en', '_json', 'Unblock', 'Unblock', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(98, 1, 'en', '_json', 'You can no longer chat with this person.', 'You can no longer chat with this person.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(99, 1, 'en', '_json', 'Just Now', 'Just Now', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(100, 1, 'en', '_json', 'Sign Up', 'Sign Up', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(101, 1, 'en', '_json', 'Name', 'Name', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(102, 1, 'en', '_json', 'Password', 'Password', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(103, 1, 'en', '_json', 'Reset your password', 'Reset your password', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(104, 1, 'en', '_json', 'Enter your login email', 'Enter your login email', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(105, 1, 'en', '_json', 'Login to your account', 'Login to your account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(106, 1, 'en', '_json', 'Remember you password?', 'Remember you password?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(107, 1, 'en', '_json', 'Email', 'Email', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(108, 1, 'en', '_json', 'Logging in...', 'Logging in...', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(109, 1, 'en', '_json', 'Password does not match!', 'Password does not match!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(110, 1, 'en', '_json', 'Please enter a valid email.', 'Please enter a valid email.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(111, 1, 'en', '_json', 'Min 6 characters.', 'Min 6 characters.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(112, 1, 'en', '_json', 'Required.', 'Required.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(113, 1, 'en', '_json', 'Confirm Password', 'Confirm Password', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(114, 1, 'en', '_json', 'At least 6 characters', 'At least 6 characters', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(115, 1, 'en', '_json', 'Create An Account', 'Create An Account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(116, 1, 'en', '_json', 'Forgot your password?', 'Forgot your password?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(117, 1, 'en', '_json', 'Open New Account', 'Open New Account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(118, 1, 'en', '_json', 'Complete Sign Up', 'Complete Sign Up', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(119, 1, 'en', '_json', 'Or', 'Or', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(120, 1, 'en', '_json', 'Account created successfully. You can login now.', 'Account created successfully. You can login now.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(121, 1, 'en', '_json', 'Already have an account?', 'Already have an account?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(122, 1, 'en', '_json', 'Sign In', 'Sign In', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(123, 1, 'en', '_json', 'You do not have an account yet?', 'You do not have an account yet?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(124, 1, 'en', '_json', 'Password reset successfully. Redirecting to login...', 'Password reset successfully. Redirecting to login...', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(125, 1, 'en', '_json', 'Reset', 'Reset', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(126, 1, 'en', '_json', 'Private', 'Private', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(127, 1, 'en', '_json', 'Public', 'Public', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(128, 1, 'en', '_json', 'Playlist Name', 'Playlist Name', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(129, 1, 'en', '_json', 'Edit Playlist', 'Edit Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(130, 1, 'en', '_json', 'Pick', 'Pick', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(131, 1, 'en', '_json', 'Crop Image', 'Crop Image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(132, 1, 'en', '_json', 'Create Playlist', 'Create Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(133, 1, 'en', '_json', 'Create', 'Create', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(134, 1, 'en', '_json', 'Start typing to search', 'Start typing to search', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(135, 1, 'en', '_json', 'Search Song', 'Search Song', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(136, 1, 'en', '_json', 'No playlists!', 'No playlists!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(137, 1, 'en', '_json', 'New Playlist', 'New Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(138, 1, 'en', '_json', 'Choose Playlist', 'Choose Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(139, 1, 'en', '_json', 'updated successfully!', 'updated successfully!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(140, 1, 'en', '_json', 'Song Deleted!', 'Song Deleted!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(141, 1, 'en', '_json', 'Are you sure you wanna delete this song?', 'Are you sure you wanna delete this song?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(142, 1, 'en', '_json', 'Delete', 'Delete', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(143, 1, 'en', '_json', 'Make Private', 'Make Private', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(144, 1, 'en', '_json', 'Make Public', 'Make Public', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(145, 1, 'en', '_json', 'Title', 'Title', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(146, 1, 'en', '_json', 'Are you sure you wanna make this song private? This means that it\'s gonna be visible only for you.', 'Are you sure you wanna make this song private? This means that it\'s gonna be visible only for you.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(147, 1, 'en', '_json', 'Are you sure you wanna make this song public? This means that it\'s gonna be visible on your profile.', 'Are you sure you wanna make this song public? This means that it\'s gonna be visible on your profile.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(148, 1, 'en', '_json', 'has been removed from playlist successfully!', 'has been removed from playlist successfully!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(149, 1, 'en', '_json', 'Are you sure you wanna remove this song from this playlist?', 'Are you sure you wanna remove this song from this playlist?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(150, 1, 'en', '_json', 'Remove song from playlist', 'Remove song from playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(151, 1, 'en', '_json', 'Song already exists on this playlist!', 'Song already exists on this playlist!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(152, 1, 'en', '_json', 'Already There!', 'Already There!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(153, 1, 'en', '_json', 'New', 'New', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(154, 1, 'en', '_json', 'There are no results found for this search keyword.', 'There are no results found for this search keyword.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(155, 1, 'en', '_json', 'Logo Image', 'Logo Image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(156, 1, 'en', '_json', 'Please choose an image', 'Please choose an image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(157, 1, 'en', '_json', 'Image must be less then', 'Image must be less then', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(158, 1, 'en', '_json', 'Choose Image', 'Choose Image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(159, 1, 'en', '_json', 'Latest Song', 'Latest Song', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(160, 1, 'en', '_json', 'By', 'By', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(161, 1, 'en', '_json', 'Empty!', 'Empty!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(162, 1, 'en', '_json', 'This playlist has no songs.', 'This playlist has no songs.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(163, 1, 'en', '_json', 'You need to copy the URL manually.', 'You need to copy the URL manually.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(164, 1, 'en', '_json', 'Oops!', 'Oops!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(165, 1, 'en', '_json', 'URL copied to clipboard.', 'URL copied to clipboard.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(166, 1, 'en', '_json', 'Add To Playlist', 'Add To Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(167, 1, 'en', '_json', 'Add To Queue', 'Add To Queue', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(168, 1, 'en', '_json', 'Go To Artist', 'Go To Artist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(169, 1, 'en', '_json', 'Share', 'Share', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(170, 1, 'en', '_json', 'Copy URL', 'Copy URL', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(171, 1, 'en', '_json', 'Copy to clipboard', 'Copy to clipboard', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(172, 1, 'en', '_json', 'Total Plays', 'Total Plays', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(173, 1, 'en', '_json', 'Followers', 'Followers', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(174, 1, 'en', '_json', 'Cover', 'Cover', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(175, 1, 'en', '_json', 'Plays', 'Plays', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(176, 1, 'en', '_json', 'Created At', 'Created At', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(177, 1, 'en', '_json', 'Likes', 'Likes', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(178, 1, 'en', '_json', 'Updated', 'Updated', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(179, 1, 'en', '_json', 'Created', 'Created', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(180, 1, 'en', '_json', 'Saved', 'Saved', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(181, 1, 'en', '_json', 'Deleted.', 'Deleted.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(182, 1, 'en', '_json', 'Are you sure you wanna delete this', 'Are you sure you wanna delete this', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(183, 1, 'en', '_json', 'Fetching data...', 'Fetching data...', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(184, 1, 'en', '_json', 'Error', 'Error', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(185, 1, 'en', '_json', 'Success', 'Success', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(186, 1, 'en', '_json', 'Artist account', 'Artist account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(187, 1, 'en', '_json', 'This name will be displayed on your profile.', 'This name will be displayed on your profile.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(188, 1, 'en', '_json', 'Displayname', 'Displayname', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(189, 1, 'en', '_json', 'Lastname', 'Lastname', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(190, 1, 'en', '_json', 'This is a private information.', 'This is a private information.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(191, 1, 'en', '_json', 'Firstname', 'Firstname', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(192, 1, 'en', '_json', 'Firstly, fill your information', 'Firstly, fill your information', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(193, 1, 'en', '_json', 'Welcome to your artist account', 'Welcome to your artist account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(194, 1, 'en', '_json', 'Rank', 'Rank', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(195, 1, 'en', '_json', 'Empty Section', 'Empty Section', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(196, 1, 'en', '_json', 'No Data!', 'No Data!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(197, 1, 'en', '_json', 'Use Default', 'Use Default', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(198, 1, 'en', '_json', 'Deleted', 'Deleted', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(199, 1, 'en', '_json', 'Operations', 'Operations', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(200, 1, 'en', '_json', 'Podcasts are disabled.', 'Podcasts are disabled.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(201, 1, 'en', '_json', 'Edit Personal Information', 'Edit Personal Information', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(202, 1, 'en', '_json', 'Released At', 'Released At', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(203, 1, 'en', '_json', 'Personal Information', 'Personal Information', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(204, 1, 'en', '_json', 'Nothing New!', 'Nothing New!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(205, 1, 'en', '_json', 'You do not have any new notifications.', 'You do not have any new notifications.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(206, 1, 'en', '_json', 'Settings reset successfully!', 'Settings reset successfully!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(207, 1, 'en', '_json', 'Are you sure you wanna reset to the default settings?', 'Are you sure you wanna reset to the default settings?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(208, 1, 'en', '_json', 'You need to enter your Google OAuth client ID.', 'You need to enter your Google OAuth client ID.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(209, 1, 'en', '_json', 'You need to add your Pusher credentials if you enable chatting.', 'You need to add your Pusher credentials if you enable chatting.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(210, 1, 'en', '_json', 'Are you sure you wanna change to the current settings?', 'Are you sure you wanna change to the current settings?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(211, 1, 'en', '_json', 'SEO', 'SEO', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(212, 1, 'en', '_json', 'Auth', 'Auth', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(213, 1, 'en', '_json', 'Storage', 'Storage', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(214, 1, 'en', '_json', 'Billing', 'Billing', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(215, 1, 'en', '_json', 'General', 'General', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(216, 1, 'en', '_json', 'Preview', 'Preview', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(217, 1, 'en', '_json', 'Positions', 'Positions', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(218, 1, 'en', '_json', 'Outlined', 'Outlined', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(219, 1, 'en', '_json', 'Must be a material design icon', 'Must be a material design icon', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(220, 1, 'en', '_json', 'Subscription Button', 'Subscription Button', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(221, 1, 'en', '_json', 'Images & Icons', 'Images & Icons', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(222, 1, 'en', '_json', 'Dark', 'Dark', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(223, 1, 'en', '_json', 'Light', 'Light', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(224, 1, 'en', '_json', 'Default Theme', 'Default Theme', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(225, 1, 'en', '_json', 'Home Page', 'Home Page', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(226, 1, 'en', '_json', 'Themes', 'Themes', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(227, 1, 'en', '_json', 'Navigation', 'Navigation', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(228, 1, 'en', '_json', 'Landing', 'Landing', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(229, 1, 'en', '_json', 'Call to action button', 'Call to action button', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(230, 1, 'en', '_json', 'Header Title', 'Header Title', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(231, 1, 'en', '_json', 'Header Subtitle', 'Header Subtitle', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(232, 1, 'en', '_json', 'Background Image', 'Background Image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(233, 1, 'en', '_json', 'Change', 'Change', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(234, 1, 'en', '_json', 'Image', 'Image', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(235, 1, 'en', '_json', 'Show Contact Us form', 'Show Contact Us form', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(236, 1, 'en', '_json', 'Description', 'Description', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(237, 1, 'en', '_json', 'Footer Background', 'Footer Background', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(238, 1, 'en', '_json', 'Use a custom landing header', 'Use a custom landing header', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(239, 1, 'en', '_json', 'Use Muzzie\'s default landing header', 'Use Muzzie\'s default landing header', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(240, 1, 'en', '_json', 'Are you sure you wanna reset to default settings?', 'Are you sure you wanna reset to default settings?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(241, 1, 'en', '_json', 'Sections', 'Sections', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(242, 1, 'en', '_json', 'Header', 'Header', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(243, 1, 'en', '_json', 'Footer', 'Footer', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(244, 1, 'en', '_json', 'Make sure to add your SMTP credentials in the Email settings.', 'Make sure to add your SMTP credentials in the Email settings.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(245, 1, 'en', '_json', 'Background Layer Color', 'Background Layer Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(246, 1, 'en', '_json', 'Landing Page', 'Landing Page', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(247, 1, 'en', '_json', 'Enable Landing Page', 'Enable Landing Page', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(248, 1, 'en', '_json', 'The welcome page. Disable if you want the visitors to access the player directly.', 'The welcome page. Disable if you want the visitors to access the player directly.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(249, 1, 'en', '_json', 'New Item', 'New Item', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(250, 1, 'en', '_json', 'This is the sidebar of the player. You can customize almost everything: Icon, text, and destination.', 'This is the sidebar of the player. You can customize almost everything: Icon, text, and destination.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(251, 1, 'en', '_json', 'Sidebar', 'Sidebar', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(252, 1, 'en', '_json', 'Select Page', 'Select Page', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(253, 1, 'en', '_json', 'Navigates to', 'Navigates to', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(254, 1, 'en', '_json', 'Text Color', 'Text Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(255, 1, 'en', '_json', 'Chat, Friendlist...etc', 'Chat, Friendlist...etc', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(256, 1, 'en', '_json', 'Panel Color', 'Panel Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(257, 1, 'en', '_json', 'For gradients with Prim. Color( Ex: progress bar of the player)', 'For gradients with Prim. Color( Ex: progress bar of the player)', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(258, 1, 'en', '_json', 'Secondary Color', 'Secondary Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(259, 1, 'en', '_json', 'For buttons,icons, nav items, active items...', 'For buttons,icons, nav items, active items...', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(260, 1, 'en', '_json', 'Primary Color', 'Primary Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(261, 1, 'en', '_json', 'Colors', 'Colors', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(262, 1, 'en', '_json', 'Gateway', 'Gateway', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(263, 1, 'en', '_json', 'Enable Billing', 'Enable Billing', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(264, 1, 'en', '_json', 'Authentication', 'Authentication', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(265, 1, 'en', '_json', 'Require authentication will force visitors to authenticate.', 'Require authentication will force visitors to authenticate.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(266, 1, 'en', '_json', 'Last Update', 'Last Update', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(267, 1, 'en', '_json', 'Plan', 'Plan', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(268, 1, 'en', '_json', 'Avatar', 'Avatar', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(269, 1, 'en', '_json', 'User Account', 'User Account', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(270, 1, 'en', '_json', 'Saved successfully.', 'Saved successfully.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(271, 1, 'en', '_json', 'Bottom of right-sidebar', 'Bottom of right-sidebar', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(272, 1, 'en', '_json', 'Top of the right-sidebar', 'Top of the right-sidebar', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(273, 1, 'en', '_json', 'Top of content pages', 'Top of content pages', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(274, 1, 'en', '_json', 'Bottom of content pages', 'Bottom of content pages', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(275, 1, 'en', '_json', 'Generated', 'Generated', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(276, 1, 'en', '_json', 'Generate', 'Generate', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(277, 1, 'en', '_json', 'Page', 'Page', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(278, 1, 'en', '_json', 'Site Description', 'Site Description', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(279, 1, 'en', '_json', 'Site Title', 'Site Title', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(280, 1, 'en', '_json', 'will be replaced with', 'will be replaced with', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(281, 1, 'en', '_json', 'Quick Guide', 'Quick Guide', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(282, 1, 'en', '_json', 'reset successfully.', 'reset successfully.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(283, 1, 'en', '_json', 'Please add a valid Google OAuth Client ID.', 'Please add a valid Google OAuth Client ID.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(284, 1, 'en', '_json', 'Please add your billing credentials.', 'Please add your billing credentials.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(285, 1, 'en', '_json', 'You need to add your SMTP information.', 'You need to add your SMTP information.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(286, 1, 'en', '_json', 'Mail From Name', 'Mail From Name', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(287, 1, 'en', '_json', 'Mail From Address', 'Mail From Address', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(288, 1, 'en', '_json', 'Contact Email Address', 'Contact Email Address', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(289, 1, 'en', '_json', 'Enable Emails', 'Enable Emails', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(290, 1, 'en', '_json', 'Max file size allowed', 'Max file size allowed', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(291, 1, 'en', '_json', 'Max image size allowed', 'Max image size allowed', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(292, 1, 'en', '_json', 'Available disk space for users', 'Available disk space for users', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(293, 1, 'en', '_json', 'Available disk space for artists', 'Available disk space for artists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(294, 1, 'en', '_json', 'Local Storage', 'Local Storage', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(295, 1, 'en', '_json', 'Default Artist Disk Space', 'Default Artist Disk Space', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(296, 1, 'en', '_json', 'Max Image Size', 'Max Image Size', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(297, 1, 'en', '_json', 'Default User Disk Space', 'Default User Disk Space', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(298, 1, 'en', '_json', 'Credentials', 'Credentials', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(299, 1, 'en', '_json', 'Storage Disk', 'Storage Disk', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(300, 1, 'en', '_json', 'Key', 'Key', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(301, 1, 'en', '_json', 'Translation', 'Translation', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(302, 1, 'en', '_json', 'Select a similar language to fill the translations. You can leave it empty.', 'Select a similar language to fill the translations. You can leave it empty.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(303, 1, 'en', '_json', 'Select Similar Language', 'Select Similar Language', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(304, 1, 'en', '_json', 'Add New Language', 'Add New Language', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(305, 1, 'en', '_json', 'Edit Language', 'Edit Language', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(306, 1, 'en', '_json', 'Update', 'Update', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(307, 1, 'en', '_json', 'Deactivated', 'Deactivated', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(308, 1, 'en', '_json', 'Activated', 'Activated', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(309, 1, 'en', '_json', 'Default', 'Default', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(310, 1, 'en', '_json', 'New Language', 'New Language', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(311, 1, 'en', '_json', 'Subscription cancelled successfully.', 'Subscription cancelled successfully.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(312, 1, 'en', '_json', 'Cancelled', 'Cancelled', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(313, 1, 'en', '_json', 'Subscription', 'Subscription', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(314, 1, 'en', '_json', 'Owner', 'Owner', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(315, 1, 'en', '_json', 'Status', 'Status', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(316, 1, 'en', '_json', 'Renews At', 'Renews At', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(317, 1, 'en', '_json', 'Downloads', 'Downloads', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(318, 1, 'en', '_json', 'Are you sure you wanna save the current permissions?', 'Are you sure you wanna save the current permissions?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(319, 1, 'en', '_json', 'Edit', 'Edit', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(320, 1, 'en', '_json', 'Permission', 'Permission', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(321, 1, 'en', '_json', 'Permissions', 'Permissions', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(322, 1, 'en', '_json', 'Roles reset successfully.', 'Roles reset successfully.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(323, 1, 'en', '_json', 'Podcast', 'Podcast', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(324, 1, 'en', '_json', 'Playlist', 'Playlist', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(325, 1, 'en', '_json', 'Chats', 'Chats', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(326, 1, 'en', '_json', 'Opening chat...Please wait!', 'Opening chat...Please wait!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(327, 1, 'en', '_json', 'No chats to show!', 'No chats to show!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(328, 1, 'en', '_json', 'Add some friends and start chatting!', 'Add some friends and start chatting!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(329, 1, 'en', '_json', 'Discard', 'Discard', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(330, 1, 'en', '_json', 'Are you sure you wanna quit without saving the changes?', 'Are you sure you wanna quit without saving the changes?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(331, 1, 'en', '_json', 'used already.', 'used already.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(332, 1, 'en', '_json', 'Amount', 'Amount', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(333, 1, 'en', '_json', 'Storage Space', 'Storage Space', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(334, 1, 'en', '_json', 'Background Color', 'Background Color', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(335, 1, 'en', '_json', 'You do not have any new requests.', 'You do not have any new requests.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(336, 1, 'en', '_json', 'Are you sure you wanna unfriend', 'Are you sure you wanna unfriend', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(337, 1, 'en', '_json', 'Are you sure you wanna make this playlist private? This means that it\'s gonna be visible only for you.', 'Are you sure you wanna make this playlist private? This means that it\'s gonna be visible only for you.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(338, 1, 'en', '_json', 'Are you sure you wanna make this playlist public? This means that it\'s gonna be visible on your profile.', 'Are you sure you wanna make this playlist public? This means that it\'s gonna be visible on your profile.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(339, 1, 'en', '_json', 'Are you sure you wanna delete this playlist?', 'Are you sure you wanna delete this playlist?', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(340, 1, 'en', '_json', 'My followed Playlists', 'My followed Playlists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(341, 1, 'en', '_json', 'My Playlists', 'My Playlists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(342, 1, 'en', '_json', 'No Playlists!', 'No Playlists!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(343, 1, 'en', '_json', 'This page is empty.', 'This page is empty.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(344, 1, 'en', '_json', 'My Likes', 'My Likes', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(345, 1, 'en', '_json', 'You did not follow any artist yet!', 'You did not follow any artist yet!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(346, 1, 'en', '_json', 'No artists!', 'No artists!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(347, 1, 'en', '_json', 'Followed Artists', 'Followed Artists', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(348, 1, 'en', '_json', 'No likes yet!', 'No likes yet!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(349, 1, 'en', '_json', 'Liked Albums', 'Liked Albums', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(350, 1, 'en', '_json', 'Explore and listen to various genres & moods.', 'Explore and listen to various genres & moods.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(351, 1, 'en', '_json', 'Browse', 'Browse', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(352, 1, 'en', '_json', 'Looks like there is no content yet for this genre.', 'Looks like there is no content yet for this genre.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(353, 1, 'en', '_json', 'Some server error has occurred. Try again later.', 'Some server error has occurred. Try again later.', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(354, 1, 'en', '_json', 'Something wrong happened!', 'Something wrong happened!', '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(355, 1, 'en', '_json', 'Go Back', 'Go Back', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(356, 1, 'en', '_json', 'Genre does not exist!', 'Genre does not exist!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(357, 1, 'en', '_json', 'Not available!', 'Not available!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(358, 1, 'en', '_json', 'Here you can explore all', 'Here you can explore all', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(359, 1, 'en', '_json', 'Music', 'Music', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(360, 1, 'en', '_json', 'There is content yet!', 'There is content yet!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(361, 1, 'en', '_json', 'No Content!', 'No Content!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(362, 1, 'en', '_json', 'Manage your music', 'Manage your music', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(363, 1, 'en', '_json', 'My Songs', 'My Songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(364, 1, 'en', '_json', 'of space used', 'of space used', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(365, 1, 'en', '_json', 'Upload', 'Upload', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(366, 1, 'en', '_json', 'No songs yet!', 'No songs yet!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(367, 1, 'en', '_json', 'Your history is empty.', 'Your history is empty.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(368, 1, 'en', '_json', 'Recently Played', 'Recently Played', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(369, 1, 'en', '_json', 'You did not follow any podcasts yet!', 'You did not follow any podcasts yet!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(370, 1, 'en', '_json', 'No Podcasts!', 'No Podcasts!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(371, 1, 'en', '_json', 'Followed Podcasts', 'Followed Podcasts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(372, 1, 'en', '_json', 'updated successfully.', 'updated successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(373, 1, 'en', '_json', 'Request submitted to admins successfully.', 'Request submitted to admins successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(374, 1, 'en', '_json', 'Submitting...', 'Submitting...', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(375, 1, 'en', '_json', 'Confirm password does not match.', 'Confirm password does not match.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(376, 1, 'en', '_json', 'Are you sure you wanna cancel your subscription?', 'Are you sure you wanna cancel your subscription?', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(377, 1, 'en', '_json', 'Submit', 'Submit', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(378, 1, 'en', '_json', 'Requested', 'Requested', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(379, 1, 'en', '_json', 'This request can only be submitted ones.', 'This request can only be submitted ones.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(380, 1, 'en', '_json', 'Fill your information', 'Fill your information', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(381, 1, 'en', '_json', 'Features', 'Features', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(382, 1, 'en', '_json', 'Subscribed to', 'Subscribed to', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(383, 1, 'en', '_json', 'Request Artist Account', 'Request Artist Account', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(384, 1, 'en', '_json', 'Artist Account Request sent', 'Artist Account Request sent', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(385, 1, 'en', '_json', 'Do not show what I am currently playing to friends.', 'Do not show what I am currently playing to friends.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(386, 1, 'en', '_json', 'Privacy', 'Privacy', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(387, 1, 'en', '_json', 'New Password', 'New Password', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(388, 1, 'en', '_json', 'Update Password', 'Update Password', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(389, 1, 'en', '_json', 'Current password', 'Current password', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(390, 1, 'en', '_json', 'Language', 'Language', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(391, 1, 'en', '_json', 'Account Settings', 'Account Settings', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(392, 1, 'en', '_json', 'Start typing to search for a genre.', 'Start typing to search for a genre.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(393, 1, 'en', '_json', 'No results found for', 'No results found for', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(394, 1, 'en', '_json', 'Link To Artist', 'Link To Artist', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(395, 1, 'en', '_json', 'Attach this song to an existing artist', 'Attach this song to an existing artist', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(396, 1, 'en', '_json', 'Insert the name of the artist and press the Enter key.', 'Insert the name of the artist and press the Enter key.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(397, 1, 'en', '_json', 'Hide', 'Hide', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(398, 1, 'en', '_json', 'Please add a valid source file.', 'Please add a valid source file.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(399, 1, 'en', '_json', 'Please add a valid YouTube video ID or URL.', 'Please add a valid YouTube video ID or URL.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(400, 1, 'en', '_json', 'Attach', 'Attach', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(401, 1, 'en', '_json', 'Friend Request sent successfully.', 'Friend Request sent successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(402, 1, 'en', '_json', 'Friend removed successfully.', 'Friend removed successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(403, 1, 'en', '_json', 'User does not exist.', 'User does not exist.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(404, 1, 'en', '_json', 'Not Available!', 'Not Available!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(405, 1, 'en', '_json', 'Looks like this account is still new!', 'Looks like this account is still new!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(406, 1, 'en', '_json', 'This album is empty.', 'This album is empty.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(407, 1, 'en', '_json', 'Reject', 'Reject', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(408, 1, 'en', '_json', 'artist account request has been rejected.', 'artist account request has been rejected.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(409, 1, 'en', '_json', 'has an artist account now.', 'has an artist account now.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(410, 1, 'en', '_json', 'Approve', 'Approve', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(411, 1, 'en', '_json', 'Friend request by', 'Friend request by', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(412, 1, 'en', '_json', 'was rejected.', 'was rejected.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(413, 1, 'en', '_json', 'Request Rejected', 'Request Rejected', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(414, 1, 'en', '_json', 'Request Accepted', 'Request Accepted', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(415, 1, 'en', '_json', 'has been added to your friend list', 'has been added to your friend list', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(416, 1, 'en', '_json', 'Artist Request', 'Artist Request', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(417, 1, 'en', '_json', 'Click to see details', 'Click to see details', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(418, 1, 'en', '_json', 'Subject is required', 'Subject is required', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(419, 1, 'en', '_json', 'Subject must contain be at least 4 characters', 'Subject must contain be at least 4 characters', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(420, 1, 'en', '_json', 'E-mail must be valid', 'E-mail must be valid', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(421, 1, 'en', '_json', 'E-mail is required', 'E-mail is required', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(422, 1, 'en', '_json', 'anytime', 'anytime', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(423, 1, 'en', '_json', 'anywhere', 'anywhere', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(424, 1, 'en', '_json', 'Email sent successfully.', 'Email sent successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(425, 1, 'en', '_json', 'Send', 'Send', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(426, 1, 'en', '_json', 'Choose', 'Choose', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(427, 1, 'en', '_json', 'Free', 'Free', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(428, 1, 'en', '_json', 'Recommended', 'Recommended', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(429, 1, 'en', '_json', 'Payment', 'Payment', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(430, 1, 'en', '_json', 'Complete', 'Complete', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(431, 1, 'en', '_json', 'Choose your plan', 'Choose your plan', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(432, 1, 'en', '_json', 'Oops! Some error occurred. Try again later.', 'Oops! Some error occurred. Try again later.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(433, 1, 'en', '_json', 'Subscribe', 'Subscribe', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(434, 1, 'en', '_json', 'Accepted Payment Methods', 'Accepted Payment Methods', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(435, 1, 'en', '_json', 'Reloading', 'Reloading', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(436, 1, 'en', '_json', 'Congratulation! Subscription was successful.', 'Congratulation! Subscription was successful.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(437, 1, 'en', '_json', 'Credit Card', 'Credit Card', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(438, 1, 'en', '_json', 'Year', 'Year', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(439, 1, 'en', '_json', 'Month', 'Month', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(440, 1, 'en', '_json', 'Week', 'Week', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(441, 1, 'en', '_json', 'Day', 'Day', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(442, 1, 'en', '_json', 'You already have a subscription. Do you want to cancel the current one and switch to a new subscription?', 'You already have a subscription. Do you want to cancel the current one and switch to a new subscription?', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(443, 1, 'en', '_json', 'Your Library', 'Your Library', '2021-10-14 21:19:42', '2021-10-14 21:19:42');
INSERT INTO `ltm_translations` (`id`, `status`, `locale`, `group`, `key`, `value`, `created_at`, `updated_at`) VALUES
(444, 1, 'en', '_json', 'Podcast genre does not exist.', 'Podcast genre does not exist.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(445, 1, 'en', '_json', 'This genre has no podcasts yet.', 'This genre has no podcasts yet.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(446, 1, 'en', '_json', 'Tracks', 'Tracks', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(447, 1, 'en', '_json', 'This artist profile is empty.', 'This artist profile is empty.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(448, 1, 'en', '_json', 'Following', 'Following', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(449, 1, 'en', '_json', 'Page Not Found', 'Page Not Found', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(450, 1, 'en', '_json', 'There is no content to be displayed.', 'There is no content to be displayed.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(451, 1, 'en', '_json', 'has been deleted successfully.', 'has been deleted successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(452, 1, 'en', '_json', 'deleted successfully.', 'deleted successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(453, 1, 'en', '_json', 'Something went wrong. Please try again.', 'Something went wrong. Please try again.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(454, 1, 'en', '_json', 'Playlist does not exist or maybe it is not available for public access. who knows!', 'Playlist does not exist or maybe it is not available for public access. who knows!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(455, 1, 'en', '_json', 'This playlist is empty.', 'This playlist is empty.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(456, 1, 'en', '_json', 'No Songs!', 'No Songs!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(457, 1, 'en', '_json', 'Private playlist', 'Private playlist', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(458, 1, 'en', '_json', 'does no exist.', 'does no exist.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(459, 1, 'en', '_json', 'No Episodes!', 'No Episodes!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(460, 1, 'en', '_json', 'Looks like this podcast has no episodes yet.', 'Looks like this podcast has no episodes yet.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(461, 1, 'en', '_json', 'From', 'From', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(462, 1, 'en', '_json', 'Ft.', 'Ft.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(463, 1, 'en', '_json', 'More from', 'More from', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(464, 1, 'en', '_json', 'Song does not exist or maybe it is not available for public access. Who knows!', 'Song does not exist or maybe it is not available for public access. Who knows!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(465, 1, 'en', '_json', 'has been removed from playlist successfully.', 'has been removed from playlist successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(466, 1, 'en', '_json', 'Song Removed', 'Song Removed', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(467, 1, 'en', '_json', 'There is content yet.', 'There is content yet.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(468, 1, 'en', '_json', 'Small Window', 'Small Window', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(469, 1, 'en', '_json', 'Radio Station', 'Radio Station', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(470, 1, 'en', '_json', 'Copied', 'Copied', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(471, 1, 'en', '_json', 'Song has been deleted successfully.', 'Song has been deleted successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(472, 1, 'en', '_json', 'No Results!', 'No Results!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(473, 1, 'en', '_json', 'used', 'used', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(474, 1, 'en', '_json', 'Space Used', 'Space Used', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(475, 1, 'en', '_json', 'Song added to playlist successfully.', 'Song added to playlist successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(476, 1, 'en', '_json', 'Added', 'Added', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(477, 1, 'en', '_json', 'Looks like you do not have any playlists yet.', 'Looks like you do not have any playlists yet.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(478, 1, 'en', '_json', 'validation.distinct', 'The :attribute field has a duplicate value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(479, 1, 'en', '_json', 'validation.email', 'The :attribute must be a valid email address.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(480, 1, 'en', '_json', 'validation.ends_with', 'The :attribute must end with one of the following: :values.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(481, 1, 'en', '_json', 'validation.exists', 'The selected :attribute is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(482, 1, 'en', '_json', 'validation.file', 'The :attribute must be a file.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(483, 1, 'en', '_json', 'validation.filled', 'The :attribute field must have a value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(484, 1, 'en', '_json', 'validation.gt.numeric', 'The :attribute must be greater than :value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(485, 1, 'en', '_json', 'validation.accepted', 'The :attribute must be accepted.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(486, 1, 'en', '_json', 'validation.date', 'The :attribute is not a valid date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(487, 1, 'en', '_json', 'validation.date_equals', 'The :attribute must be a date equal to :date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(488, 1, 'en', '_json', 'validation.date_format', 'The :attribute does not match the format :format.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(489, 1, 'en', '_json', 'validation.different', 'The :attribute and :other must be different.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(490, 1, 'en', '_json', 'validation.digits', 'The :attribute must be :digits digits.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(491, 1, 'en', '_json', 'validation.size.array', 'The :attribute must contain :size items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(492, 1, 'en', '_json', 'validation.starts_with', 'The :attribute must start with one of the following: :values.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(493, 1, 'en', '_json', 'validation.string', 'The :attribute must be a string.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(494, 1, 'en', '_json', 'validation.timezone', 'The :attribute must be a valid zone.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(495, 1, 'en', '_json', 'validation.unique', 'The :attribute has already been taken.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(496, 1, 'en', '_json', 'validation.uploaded', 'The :attribute failed to upload.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(497, 1, 'en', '_json', 'validation.url', 'The :attribute format is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(498, 1, 'en', '_json', 'validation.uuid', 'The :attribute must be a valid UUID.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(499, 1, 'en', '_json', 'validation.custom.attribute-name.rule-name', 'custom-message', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(500, 1, 'en', '_json', 'validation.max.file', 'The :attribute may not be greater than :max kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(501, 1, 'en', '_json', 'validation.max.string', 'The :attribute may not be greater than :max characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(502, 1, 'en', '_json', 'validation.max.array', 'The :attribute may not have more than :max items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(503, 1, 'en', '_json', 'validation.mimes', 'The :attribute must be a file of type: :values.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(504, 1, 'en', '_json', 'validation.mimetypes', 'The :attribute must be a file of type: :values.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(505, 1, 'en', '_json', 'validation.min.numeric', 'The :attribute must be at least :min.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(506, 1, 'en', '_json', 'validation.min.file', 'The :attribute must be at least :min kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(507, 1, 'en', '_json', 'validation.min.string', 'The :attribute must be at least :min characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(508, 1, 'en', '_json', 'validation.min.array', 'The :attribute must have at least :min items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(509, 1, 'en', '_json', 'validation.not_in', 'The selected :attribute is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(510, 1, 'en', '_json', 'validation.not_regex', 'The :attribute format is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(511, 1, 'en', '_json', 'validation.numeric', 'The :attribute must be a number.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(512, 1, 'en', '_json', 'validation.password', 'The password is incorrect.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(513, 1, 'en', '_json', 'validation.present', 'The :attribute field must be present.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(514, 1, 'en', '_json', 'validation.regex', 'The :attribute format is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(515, 1, 'en', '_json', 'validation.required', 'The :attribute field is required.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(516, 1, 'en', '_json', 'validation.required_if', 'The :attribute field is required when :other is :value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(517, 1, 'en', '_json', 'validation.required_unless', 'The :attribute field is required unless :other is in :values.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(518, 1, 'en', '_json', 'validation.required_with', 'The :attribute field is required when :values is present.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(519, 1, 'en', '_json', 'validation.required_with_all', 'The :attribute field is required when :values are present.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(520, 1, 'en', '_json', 'validation.required_without', 'The :attribute field is required when :values is not present.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(521, 1, 'en', '_json', 'validation.required_without_all', 'The :attribute field is required when none of :values are present.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(522, 1, 'en', '_json', 'validation.same', 'The :attribute and :other must match.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(523, 1, 'en', '_json', 'validation.size.numeric', 'The :attribute must be :size.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(524, 1, 'en', '_json', 'validation.size.file', 'The :attribute must be :size kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(525, 1, 'en', '_json', 'validation.size.string', 'The :attribute must be :size characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(526, 1, 'en', '_json', 'validation.gte.numeric', 'The :attribute must be greater than or equal :value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(527, 1, 'en', '_json', 'validation.gte.file', 'The :attribute must be greater than or equal :value kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(528, 1, 'en', '_json', 'validation.gte.string', 'The :attribute must be greater than or equal :value characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(529, 1, 'en', '_json', 'validation.gte.array', 'The :attribute must have :value items or more.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(530, 1, 'en', '_json', 'validation.image', 'The :attribute must be an image.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(531, 1, 'en', '_json', 'validation.in', 'The selected :attribute is invalid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(532, 1, 'en', '_json', 'validation.active_url', 'The :attribute is not a valid URL.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(533, 1, 'en', '_json', 'validation.after', 'The :attribute must be a date after :date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(534, 1, 'en', '_json', 'validation.after_or_equal', 'The :attribute must be a date after or equal to :date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(535, 1, 'en', '_json', 'validation.boolean', 'The :attribute field must be true or false.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(536, 1, 'en', '_json', 'validation.confirmed', 'The :attribute confirmation does not match.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(537, 1, 'en', '_json', 'validation.in_array', 'The :attribute field does not exist in :other.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(538, 1, 'en', '_json', 'validation.integer', 'The :attribute must be an integer.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(539, 1, 'en', '_json', 'validation.ip', 'The :attribute must be a valid IP address.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(540, 1, 'en', '_json', 'validation.ipv4', 'The :attribute must be a valid IPv4 address.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(541, 1, 'en', '_json', 'validation.ipv6', 'The :attribute must be a valid IPv6 address.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(542, 1, 'en', '_json', 'validation.json', 'The :attribute must be a valid JSON string.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(543, 1, 'en', '_json', 'validation.lt.numeric', 'The :attribute must be less than :value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(544, 1, 'en', '_json', 'validation.lt.file', 'The :attribute must be less than :value kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(545, 1, 'en', '_json', 'validation.lt.string', 'The :attribute must be less than :value characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(546, 1, 'en', '_json', 'validation.lt.array', 'The :attribute must have less than :value items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(547, 1, 'en', '_json', 'validation.lte.numeric', 'The :attribute must be less than or equal :value.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(548, 1, 'en', '_json', 'validation.lte.file', 'The :attribute must be less than or equal :value kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(549, 1, 'en', '_json', 'validation.lte.string', 'The :attribute must be less than or equal :value characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(550, 1, 'en', '_json', 'validation.lte.array', 'The :attribute must not have more than :value items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(551, 1, 'en', '_json', 'validation.max.numeric', 'The :attribute may not be greater than :max.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(552, 1, 'en', '_json', 'validation.digits_between', 'The :attribute must be between :min and :max digits.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(553, 1, 'en', '_json', 'validation.dimensions', 'The :attribute has invalid image dimensions.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(554, 1, 'en', '_json', 'validation.alpha', 'The :attribute may only contain letters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(555, 1, 'en', '_json', 'validation.alpha_dash', 'The :attribute may only contain letters, numbers, dashes and underscores.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(556, 1, 'en', '_json', 'validation.alpha_num', 'The :attribute may only contain letters and numbers.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(557, 1, 'en', '_json', 'validation.array', 'The :attribute must be an array.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(558, 1, 'en', '_json', 'validation.before', 'The :attribute must be a date before :date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(559, 1, 'en', '_json', 'validation.before_or_equal', 'The :attribute must be a date before or equal to :date.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(560, 1, 'en', '_json', 'validation.between.numeric', 'The :attribute must be between :min and :max.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(561, 1, 'en', '_json', 'validation.between.file', 'The :attribute must be between :min and :max kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(562, 1, 'en', '_json', 'validation.between.string', 'The :attribute must be between :min and :max characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(563, 1, 'en', '_json', 'validation.between.array', 'The :attribute must have between :min and :max items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(564, 1, 'en', '_json', 'validation.gt.file', 'The :attribute must be greater than :value kilobytes.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(565, 1, 'en', '_json', 'validation.gt.string', 'The :attribute must be greater than :value characters.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(566, 1, 'en', '_json', 'validation.gt.array', 'The :attribute must have more than :value items.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(567, 1, 'en', '_json', 'Save', 'Save', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(568, 1, 'en', '_json', 'Register', 'Register', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(569, 1, 'en', '_json', 'Upgrade Account', 'Upgrade Account', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(570, 1, 'en', '_json', 'File corrupted!', 'File corrupted!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(571, 1, 'en', '_json', 'The source file you are trying to upload is corrupted.', 'The source file you are trying to upload is corrupted.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(572, 1, 'en', '_json', 'Max file size is', 'Max file size is', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(573, 1, 'en', '_json', 'TB', 'TB', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(574, 1, 'en', '_json', 'GB', 'GB', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(575, 1, 'en', '_json', 'MB', 'MB', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(576, 1, 'en', '_json', 'Radio Stations', 'Radio Stations', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(577, 1, 'en', '_json', 'YouTube Video', 'YouTube Video', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(578, 1, 'en', '_json', 'Audio File', 'Audio File', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(579, 1, 'en', '_json', 'Auto Duration', 'Auto Duration', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(580, 1, 'en', '_json', 'Duration in seconds', 'Duration in seconds', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(581, 1, 'en', '_json', 'Duration', 'Duration', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(582, 1, 'en', '_json', 'You can add the video ID, but It must be valid.', 'You can add the video ID, but It must be valid.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(583, 1, 'en', '_json', 'Attach Audio File', 'Attach Audio File', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(584, 1, 'en', '_json', 'Artist Area', 'Artist Area', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(585, 1, 'en', '_json', 'Admin Area', 'Admin Area', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(586, 1, 'en', '_json', 'Song', 'Song', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(587, 1, 'en', '_json', 'Genres', 'Genres', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(588, 1, 'en', '_json', 'Player', 'Player', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(589, 1, 'en', '_json', 'Library', 'Library', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(590, 1, 'en', '_json', 'Plays Chart', 'Plays Chart', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(591, 1, 'en', '_json', 'Delete Song', 'Delete Song', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(592, 1, 'en', '_json', 'Detach song from this album', 'Detach song from this album', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(593, 1, 'en', '_json', 'Song attached to album.', 'Song attached to album.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(594, 1, 'en', '_json', 'Release Date', 'Release Date', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(595, 1, 'en', '_json', 'Start typing to search to an artist.', 'Start typing to search to an artist.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(596, 1, 'en', '_json', 'saved successfully', 'saved successfully', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(597, 1, 'en', '_json', 'Badge', 'Badge', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(598, 1, 'en', '_json', 'Show the upgrade button after subscription. Switch on if there is a better plan than this.', 'Show the upgrade button after subscription. Switch on if there is a better plan than this.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(599, 1, 'en', '_json', 'Interface', 'Interface', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(600, 1, 'en', '_json', 'Add displayed feature', 'Add displayed feature', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(601, 1, 'en', '_json', 'This does not affect the script', 'This does not affect the script', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(602, 1, 'en', '_json', 'Features that will display on the plan card', 'Features that will display on the plan card', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(603, 1, 'en', '_json', 'Card Features', 'Card Features', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(604, 1, 'en', '_json', 'Artist Permissions', 'Artist Permissions', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(605, 1, 'en', '_json', 'Permissions to grant for subscribed users', 'Permissions to grant for subscribed users', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(606, 1, 'en', '_json', 'Display order of the plans(lower first)', 'Display order of the plans(lower first)', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(607, 1, 'en', '_json', 'Position', 'Position', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(608, 1, 'en', '_json', 'The frequency of the subscription billing', 'The frequency of the subscription billing', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(609, 1, 'en', '_json', 'Amount in cents (can not be changed later)', 'Amount in cents (can not be changed later)', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(610, 1, 'en', '_json', 'Currency', 'Currency', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(611, 1, 'en', '_json', 'Enable billing to create non-free plans', 'Enable billing to create non-free plans', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(612, 1, 'en', '_json', 'Some values can not be updated after the plan creation', 'Some values can not be updated after the plan creation', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(613, 1, 'en', '_json', 'Search Translation', 'Search Translation', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(614, 1, 'en', '_json', 'Price', 'Price', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(615, 1, 'en', '_json', 'Inactive', 'Inactive', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(616, 1, 'en', '_json', 'Active', 'Active', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(617, 1, 'en', '_json', 'Upgradable', 'Upgradable', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(618, 1, 'en', '_json', 'week', 'week', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(619, 1, 'en', '_json', 'day', 'day', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(620, 1, 'en', '_json', 'month', 'month', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(621, 1, 'en', '_json', 'year', 'year', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(622, 1, 'en', '_json', 'Password reset successfully.', 'Password reset successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(623, 1, 'en', '_json', 'Email verification link sent on your Email.', 'Email verification link sent on your Email.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(624, 1, 'en', '_json', 'Invalid/Expired url provided.', 'Invalid/Expired url provided.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(625, 1, 'en', '_json', 'Current password does not match', 'Current password does not match', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(626, 1, 'en', '_json', 'Failed to delete subscription from PayPal.', 'Failed to delete subscription from PayPal.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(627, 1, 'en', '_json', 'Failed to delete subscription from Stripe.', 'Failed to delete subscription from Stripe.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(628, 1, 'en', '_json', 'Failed, Invalid Token', 'Failed, Invalid Token', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(629, 1, 'en', '_json', 'Email could not be sent to this email address', 'Email could not be sent to this email address', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(630, 1, 'en', '_json', 'You have exceeded your space limit', 'You have exceeded your space limit', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(631, 1, 'en', '_json', 'No ads', 'No ads', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(632, 1, 'en', '_json', 'Publish playlists', 'Publish playlists', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(633, 1, 'en', '_json', 'Publish songs', 'Publish songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(634, 1, 'en', '_json', 'Listen with friends', 'Listen with friends', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(635, 1, 'en', '_json', 'Chat with friends', 'Chat with friends', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(636, 1, 'en', '_json', 'Download songs', 'Download songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(637, 1, 'en', '_json', 'Upload songs', 'Upload songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(638, 1, 'en', '_json', 'No data available', 'No data available', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(639, 1, 'en', '_json', 'Home', 'Home', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(640, 1, 'en', '_json', 'You can check your subscription on your account settings', 'You can check your subscription on your account settings', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(641, 1, 'en', '_json', 'The name that the users will see when they receive an Email from you.', 'The name that the users will see when they receive an Email from you.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(642, 1, 'en', '_json', 'The address that the users will see when they receive an Email from you.', 'The address that the users will see when they receive an Email from you.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(643, 1, 'en', '_json', 'Require Authentication', 'Require Authentication', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(644, 1, 'en', '_json', 'Does not see advertisements.', 'Does not see advertisements.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(645, 1, 'en', '_json', 'Ability to change playlists privacy to public.', 'Ability to change playlists privacy to public.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(646, 1, 'en', '_json', 'Ability to change songs privacy to public.', 'Ability to change songs privacy to public.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(647, 1, 'en', '_json', 'Listen with friends to the same song at the same time.', 'Listen with friends to the same song at the same time.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(648, 1, 'en', '_json', 'Live Radio', 'Live Radio', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(649, 1, 'en', '_json', 'Episodes', 'Episodes', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(650, 1, 'en', '_json', 'Number of plays', 'Number of plays', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(651, 1, 'en', '_json', 'Localization', 'Localization', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(652, 1, 'en', '_json', 'Platform Name', 'Platform Name', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(653, 1, 'en', '_json', 'Disabling podcasts will remove anything related to podcasts on the application', 'Disabling podcasts will remove anything related to podcasts on the application', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(654, 1, 'en', '_json', 'Community', 'Community', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(655, 1, 'en', '_json', 'Friendship System', 'Friendship System', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(656, 1, 'en', '_json', 'Disable this functionality if you do not want users to be friends with each other', 'Disable this functionality if you do not want users to be friends with each other', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(657, 1, 'en', '_json', 'This will allow live chat and what the users are currently playing', 'This will allow live chat and what the users are currently playing', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(658, 1, 'en', '_json', 'Enable chat between friends', 'Enable chat between friends', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(659, 1, 'en', '_json', 'Allow users to request an artist account by sending their information to the admins', 'Allow users to request an artist account by sending their information to the admins', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(660, 1, 'en', '_json', 'Download Button', 'Download Button', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(661, 1, 'en', '_json', 'Show the download button on the player(if the audio has a file)', 'Show the download button on the player(if the audio has a file)', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(662, 1, 'en', '_json', 'Default Volume', 'Default Volume', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(663, 1, 'en', '_json', 'No Sections!', 'No Sections!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(664, 1, 'en', '_json', 'Page empty. Add some sections.', 'Page empty. Add some sections.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(665, 1, 'en', '_json', 'Add Section', 'Add Section', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(666, 1, 'en', '_json', 'Enable to receive Emails from users. Enable to verify users Email addresses.', 'Enable to receive Emails from users. Enable to verify users Email addresses.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(667, 1, 'en', '_json', 'Show on the live radio section on the right-sidebar', 'Show on the live radio section on the right-sidebar', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(668, 1, 'en', '_json', 'Highlight', 'Highlight', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(669, 1, 'en', '_json', 'Remove user registration on the application', 'Remove user registration on the application', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(670, 1, 'en', '_json', 'Select the landing page of your platform. You can create custom pages.', 'Select the landing page of your platform. You can create custom pages.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(671, 1, 'en', '_json', 'Platform', 'Platform', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(672, 1, 'en', '_json', 'Locale', 'Locale', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(673, 1, 'en', '_json', 'Enable Realtime', 'Enable Realtime', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(674, 1, 'en', '_json', 'About Us', 'About Us', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(675, 1, 'en', '_json', 'Disabling podcasts will remove anything related to podcasts on the application.', 'Disabling podcasts will remove anything related to podcasts on the application.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(676, 1, 'en', '_json', 'This will allow live chat and shows what the users are currently playing.', 'This will allow live chat and shows what the users are currently playing.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(677, 1, 'en', '_json', 'Disable this functionality if you do not want users to be friends with each other.', 'Disable this functionality if you do not want users to be friends with each other.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(678, 1, 'en', '_json', 'Describe your platform', 'Describe your platform', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(679, 1, 'en', '_json', 'You can add HTML code', 'You can add HTML code', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(680, 1, 'en', '_json', 'Enable Chat', 'Enable Chat', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(681, 1, 'en', '_json', 'Allow artist account requests', 'Allow artist account requests', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(682, 1, 'en', '_json', 'Choose Roles', 'Choose Roles', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(683, 1, 'en', '_json', 'Podcaster', 'Podcaster', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(684, 1, 'en', '_json', 'Sorry, you can not play YouTube videos.', 'Sorry, you can not play YouTube videos.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(685, 1, 'en', '_json', 'Yearly', 'Yearly', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(686, 1, 'en', '_json', 'Weekly', 'Weekly', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(687, 1, 'en', '_json', 'Monthly', 'Monthly', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(688, 1, 'en', '_json', 'Daily', 'Daily', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(689, 1, 'en', '_json', 'Please wait', 'Please wait', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(690, 1, 'en', '_json', 'Activate', 'Activate', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(691, 1, 'en', '_json', 'Artist', 'Artist', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(692, 1, 'en', '_json', 'Custom', 'Custom', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(693, 1, 'en', '_json', 'Comedy', 'Comedy', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(694, 1, 'en', '_json', 'Arts', 'Arts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(695, 1, 'en', '_json', 'Disable Registration', 'Disable Registration', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(696, 1, 'en', '_json', 'Max File Size', 'Max File Size', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(697, 1, 'en', '_json', 'Number of labels', 'Number of labels', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(698, 1, 'en', '_json', 'Select', 'Select', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(699, 1, 'en', '_json', 'Path', 'Path', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(700, 1, 'en', '_json', 'Icon', 'Icon', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(701, 1, 'en', '_json', 'No streaming source found.', 'No streaming source found.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(702, 1, 'en', '_json', 'Could not be played!', 'Could not be played!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(703, 1, 'en', '_json', 'Enable Ads', 'Enable Ads', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(704, 1, 'en', '_json', 'Logo', 'Logo', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(705, 1, 'en', '_json', 'Size', 'Size', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(706, 1, 'en', '_json', 'Now Playing', 'Now Playing', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(707, 1, 'en', '_json', 'Followed artists', 'Followed artists', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(708, 1, 'en', '_json', 'Followed playlists', 'Followed playlists', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(709, 1, 'en', '_json', 'Contact Us', 'Contact Us', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(710, 1, 'en', '_json', 'Sent', 'Sent', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(711, 1, 'en', '_json', 'User already has an active subscription.', 'User already has an active subscription.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(712, 1, 'en', '_json', 'Hide Right-sidebar', 'Hide Right-sidebar', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(713, 1, 'en', '_json', 'Content type', 'Content type', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(714, 1, 'en', '_json', 'Default Language', 'Default Language', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(715, 1, 'en', '_json', 'Source Format', 'Source Format', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(716, 1, 'en', '_json', 'Icon file', 'Icon file', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(717, 1, 'en', '_json', 'Show', 'Show', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(718, 1, 'en', '_json', 'Browse Page', 'Browse Page', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(719, 1, 'en', '_json', 'Remove the browse page which includes music genres & charts.', 'Remove the browse page which includes music genres & charts.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(720, 1, 'en', '_json', 'All rights reserved.', 'All rights reserved.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(721, 1, 'en', '_json', 'Terms Of Service', 'Terms Of Service', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(722, 1, 'en', '_json', 'Privacy Policy', 'Privacy Policy', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(723, 1, 'en', '_json', 'Store', 'Store', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(724, 1, 'en', '_json', 'Shuffle songs automatically based on the settings you provide.', 'Shuffle songs automatically based on the settings you provide.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(725, 1, 'en', '_json', 'Auto Play', 'Auto Play', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(726, 1, 'en', '_json', 'Hide Video', 'Hide Video', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(727, 1, 'en', '_json', 'Hide Download Button', 'Hide Download Button', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(728, 1, 'en', '_json', 'Providers', 'Providers', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(729, 1, 'en', '_json', 'Share Options', 'Share Options', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(730, 1, 'en', '_json', 'for each', 'for each', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(731, 1, 'en', '_json', 'Enable Artist Accounts', 'Enable Artist Accounts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(732, 1, 'en', '_json', 'How much should an artist earn per 100 play. Enter the amount in cents', 'How much should an artist earn per 100 play. Enter the amount in cents', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(733, 1, 'en', '_json', 'Contact', 'Contact', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(734, 1, 'en', '_json', 'Transaction failed. Please try again or contact us.', 'Transaction failed. Please try again or contact us.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(735, 1, 'en', '_json', 'Purchase', 'Purchase', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(736, 1, 'en', '_json', 'Premium', 'Premium', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(737, 1, 'en', '_json', 'Total', 'Total', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(738, 1, 'en', '_json', 'Artist Sale Cut', 'Artist Sale Cut', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(739, 1, 'en', '_json', 'Artist Royalty', 'Artist Royalty', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(740, 1, 'en', '_json', 'Earned', 'Earned', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(741, 1, 'en', '_json', 'Account Funds', 'Account Funds', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(742, 1, 'en', '_json', 'License', 'License', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(743, 1, 'en', '_json', 'Royalties', 'Royalties', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(744, 1, 'en', '_json', 'Previous Payouts', 'Previous Payouts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(745, 1, 'en', '_json', 'Details', 'Details', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(746, 1, 'en', '_json', 'Choose License', 'Choose License', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(747, 1, 'en', '_json', 'Add License', 'Add License', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(748, 1, 'en', '_json', 'Provide as product', 'Provide as product', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(749, 1, 'en', '_json', 'Exclusive', 'Exclusive', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(750, 1, 'en', '_json', 'Product', 'Product', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(751, 1, 'en', '_json', 'Explicit', 'Explicit', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(752, 1, 'en', '_json', 'Minimum', 'Minimum', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(753, 1, 'en', '_json', 'Total Earnings', 'Total Earnings', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(754, 1, 'en', '_json', 'Request Payout', 'Request Payout', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(755, 1, 'en', '_json', 'Payout N°', 'Payout N°', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(756, 1, 'en', '_json', 'Funds', 'Funds', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(757, 1, 'en', '_json', 'Account', 'Account', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(758, 1, 'en', '_json', 'Select payout method', 'Select payout method', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(759, 1, 'en', '_json', 'Available', 'Available', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(760, 1, 'en', '_json', 'Fetching data', 'Fetching data', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(761, 1, 'en', '_json', 'Pending', 'Pending', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(762, 1, 'en', '_json', 'Rejected', 'Rejected', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(763, 1, 'en', '_json', 'Payed', 'Payed', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(764, 1, 'en', '_json', 'Phone Number', 'Phone Number', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(765, 1, 'en', '_json', 'Read', 'Read', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(766, 1, 'en', '_json', 'Message from', 'Message from', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(767, 1, 'en', '_json', 'Mark as read', 'Mark as read', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(768, 1, 'en', '_json', 'Important', 'Important', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(769, 1, 'en', '_json', 'Enter payout amount(in cents)', 'Enter payout amount(in cents)', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(770, 1, 'en', '_json', 'Add To Cart', 'Add To Cart', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(771, 1, 'en', '_json', 'Get License', 'Get License', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(772, 1, 'en', '_json', 'Empty Cart', 'Empty Cart', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(773, 1, 'en', '_json', 'Proceed to checkout', 'Proceed to checkout', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(774, 1, 'en', '_json', 'Cart', 'Cart', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(775, 1, 'en', '_json', 'Asset added to card successfully.', 'Asset added to card successfully.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(776, 1, 'en', '_json', 'No new notifications.', 'No new notifications.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(777, 1, 'en', '_json', 'External Links', 'External Links', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(778, 1, 'en', '_json', 'Most Played Podcasts', 'Most Played Podcasts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(779, 1, 'en', '_json', 'Most Liked Songs', 'Most Liked Songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(780, 1, 'en', '_json', 'Most Played Songs', 'Most Played Songs', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(781, 1, 'en', '_json', 'Most Played Albums', 'Most Played Albums', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(782, 1, 'en', '_json', 'Popular Albums', 'Popular Albums', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(783, 1, 'en', '_json', 'Some error occurred. Please try again!', 'Some error occurred. Please try again!', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(784, 1, 'en', '_json', 'Specific Artists', 'Specific Artists', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(785, 1, 'en', '_json', 'Specific Users', 'Specific Users', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(786, 1, 'en', '_json', 'All Artists', 'All Artists', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(787, 1, 'en', '_json', 'All Users', 'All Users', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(788, 1, 'en', '_json', 'Add your message here', 'Add your message here', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(789, 1, 'en', '_json', 'Mark As Important Message', 'Mark As Important Message', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(790, 1, 'en', '_json', 'Message', 'Message', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(791, 1, 'en', '_json', 'Send to', 'Send to', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(792, 1, 'en', '_json', 'User Upload', 'User Upload', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(793, 1, 'en', '_json', 'Allow users to upload audio files locally.', 'Allow users to upload audio files locally.', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(794, 1, 'en', '_json', 'Copy', 'Copy', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(795, 1, 'en', '_json', 'Link', 'Link', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(796, 1, 'en', '_json', 'More from the same aritsts', 'More from the same aritsts', '2021-10-14 21:19:42', '2021-10-14 21:19:42'),
(797, 1, 'en', '_json', 'Allow guests to contact you', 'Allow guests to contact you', '2021-10-14 21:19:42', '2021-10-14 21:19:42');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_04_02_193005_create_translations_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2018_05_13_084701_create_session_table', 1),
(5, '2018_05_13_085121_create_messages_table', 1),
(6, '2018_05_13_085415_create_chats_table', 1),
(7, '2019_05_03_000001_create_customer_columns', 1),
(8, '2019_05_03_000002_create_subscriptions_table', 1),
(9, '2019_08_19_000000_create_failed_jobs_table', 1),
(10, '2020_05_13_145928_create_playlists_table', 1),
(11, '2020_05_13_184903_create_albums_table', 1),
(12, '2020_05_14_181224_create_genres_table', 1),
(13, '2020_05_17_074954_create_episodes_table', 1),
(14, '2020_05_17_081741_create_podcasts_table', 1),
(15, '2020_05_17_085409_create_podcast_genres_table', 1),
(16, '2020_06_12_125224_create_artists_table', 1),
(17, '2020_06_21_112902_create_song_playlist_table', 1),
(18, '2020_06_23_102926_create_notifications_table', 1),
(19, '2020_06_23_155743_create_roles_table', 1),
(20, '2020_06_23_181713_create_role_user_table', 1),
(21, '2020_07_20_203234_create_friendships_table', 1),
(22, '2020_07_27_105801_create_genre_song_table', 1),
(23, '2020_08_09_202913_create_genre_podcast_table', 1),
(24, '2020_08_18_160041_create_visiting_countries_table', 1),
(25, '2020_08_18_160415_create_visiting_browsers_table', 1),
(26, '2020_09_02_210451_create_settings_table', 1),
(27, '2020_09_21_145056_create_permissions_table', 1),
(28, '2020_09_21_214630_create_user_permission_table', 1),
(29, '2020_09_21_234427_create_role_permission_table', 1),
(30, '2020_11_05_125035_create_songs_table', 1),
(31, '2020_11_05_131453_create_sections_table', 1),
(32, '2020_11_06_143029_create_navigation_items_table', 1),
(33, '2020_12_18_135630_create_pages_table', 1),
(34, '2021_04_17_121458_create_plans_table', 1),
(35, '2021_04_17_151121_create_plan_permission', 1),
(36, '2021_04_21_222735_create_plan_role', 1),
(37, '2021_04_28_230048_create_plays_table', 1),
(38, '2021_05_01_214304_create_languages_table', 1),
(39, '2021_05_06_010614_create_radio_stations_table', 1),
(40, '2021_05_28_210900_create_artist_song_table', 1),
(41, '2021_05_30_103004_create_likes_table', 1),
(42, '2021_05_30_103216_create_follows_table', 1),
(43, '2021_05_30_180354_create_section_item_table', 1),
(44, '2021_06_12_162854_create_carts_table', 1),
(45, '2021_06_12_163523_create_products_table', 1),
(46, '2021_06_12_180903_create_prices_table', 1),
(47, '2021_06_12_190839_create_product_price_table', 1),
(48, '2021_06_16_094857_create_external_links_table', 1),
(49, '2021_06_23_163759_create_album_artist_table', 1),
(50, '2021_07_14_215841_create_sales_table', 1),
(51, '2021_07_14_221415_create_sale_product_table', 1),
(52, '2021_07_17_164004_create_payouts_table', 1),
(53, '2021_07_17_174437_create_payout_methods_table', 1),
(54, '2021_07_17_220412_create_payout_method_artist_table', 1),
(55, '2021_07_20_150223_create_royalties_table', 1),
(56, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(57, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(58, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(59, '2016_06_01_000004_create_oauth_clients_table', 2),
(60, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `navigation_items`
--

CREATE TABLE `navigation_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `navigatesTo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_id` bigint(20) DEFAULT NULL,
  `visibility` tinyint(1) NOT NULL,
  `custom` tinyint(1) NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `navigation_items`
--

INSERT INTO `navigation_items` (`id`, `name`, `icon`, `navigatesTo`, `page_id`, `visibility`, `custom`, `rank`, `path`, `created_at`, `updated_at`) VALUES
(1, 'Home', 'home', 'Custom page', 1, 1, 1, 1, '/home', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Browse', 'compass', NULL, NULL, 1, 0, 2, '/browse', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Podcasts', 'microphone', NULL, NULL, 1, 0, 3, '/podcasts', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Library', 'music-box-multiple', NULL, NULL, 1, 0, 5, '/library/my-songs', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Store', 'shopping', NULL, NULL, 1, 0, 4, '/store', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Subscription', 'star-circle', NULL, NULL, 1, 0, 5, '/subscription', '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `read_at`, `created_at`, `updated_at`) VALUES
('f1d02995-b499-4365-b0da-10b1cac347ff', 'App\\Notifications\\Message', 'App\\Artist', 4799, '{\"title\":\"Test\",\"message\":\"<p>Test<\\/p>\",\"important\":null,\"from\":{\"name\":\"Admin\",\"avatar\":\"https:\\/\\/ipmx.indieplugmedia.com\\/storage\\/defaults\\/images\\/user_avatar.png\",\"role\":\"CEO of Indie Plug Media\"}}', NULL, '2021-10-26 06:44:46', '2021-10-26 06:44:46'),
('1a458468-3e5d-4980-9eb5-afadcaecabe4', 'App\\Notifications\\Message', 'App\\Artist', 4800, '{\"title\":\"Test\",\"message\":\"<p>Test<\\/p>\",\"important\":null,\"from\":{\"name\":\"Admin\",\"avatar\":\"https:\\/\\/ipmx.indieplugmedia.com\\/storage\\/defaults\\/images\\/user_avatar.png\",\"role\":\"CEO of Indie Plug Media\"}}', '2021-10-27 21:34:12', '2021-10-26 06:44:46', '2021-10-27 21:34:12');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('c7b856edd4454e2300474ef1fb1e2b6c3d3741878c9d50c5336a90515d613ad465aa2ae78fe6d6c3', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-10-14 21:20:02', '2021-10-14 21:20:02', '2022-10-14 15:20:02'),
('fb3d23a9f969bc3742107660409833659322b7a28b343ec4eea3c48ff4d78b206f98ebe4c59ea3f0', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-15 07:13:07', '2021-10-15 07:13:07', '2022-10-15 01:13:07'),
('5d0514dcaed7dcfe087d0f030ed2ab48a71f6084faea9d18fa30261e5266c587e4854f1a423f3f32', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-15 07:44:06', '2021-10-15 07:44:06', '2022-10-15 01:44:06'),
('e3b70d99670a2ebfe52b151c83ad09e694a25212edd47c3fdce74581e46657d522840420465d6f14', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-15 19:02:20', '2021-10-15 19:02:20', '2022-10-15 13:02:20'),
('78fb84e16f09b0a89802c065519dca8979ef3247beb5192a6f6d07fe82079e8a1b76a505f6653d2d', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-10-15 19:44:07', '2021-10-15 19:44:07', '2022-10-15 13:44:07'),
('6d6ea38a2b6d64d3934469005d249b8e295e8dfd3d6e734bd373a304fbbeb3b570f2479420fe14fe', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-15 20:08:46', '2021-10-15 20:08:46', '2022-10-15 14:08:46'),
('ee0019b1f3776b678e7868b6f848df21f19f049949f0f7425c7b29fef79d57338e9fbf22866f9809', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-15 21:23:40', '2021-10-15 21:23:40', '2022-10-15 15:23:40'),
('e3fc34a61ea3ec304b3a47a6047f004ab6e6f43223317d708e61efedb8f896cde0a20693713f589c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-18 06:38:53', '2021-10-18 06:38:53', '2022-10-18 00:38:53'),
('099f304bcbdbd3adc1983eb7e85e400c1e453a045040a462e78674d9519bf85f996355e1664c18fb', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-10-20 05:38:31', '2021-10-20 05:38:31', '2022-10-19 23:38:31'),
('92aea238bf977b71d2af36172bc061fd790db33464cf510e0b0ec63c97eb7f5ad668106724afb041', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-10-20 06:11:12', '2021-10-20 06:11:12', '2022-10-20 00:11:12'),
('e8aa4b80a7d77df3fa4583e3e804a01e77285b4df5d4ab5cb27b096262f7d0fe5b2499354d0a606f', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-10-22 21:57:54', '2021-10-22 21:57:54', '2022-10-22 15:57:54'),
('942c69692ac141493b93036f742717b05a69fbf91b13f9367162299355f85e5813c2620db72cf4c9', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 00:05:31', '2021-10-26 00:05:31', '2022-10-25 18:05:31'),
('4712e518076dde11988fcb37f31487744aad1f7d8ee896777293d9f8d250a725ddf018b27432304d', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 00:07:24', '2021-10-26 00:07:24', '2022-10-25 18:07:24'),
('4fd585f7ae3d879c53ec8fb94bdde7047319e2980c459f41a3cde9bbb24e8a95bfd89eb2367030e8', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 00:08:58', '2021-10-26 00:08:58', '2022-10-25 18:08:58'),
('1786933d3b1831f255659a7e749993a35127e8d104eafe39043603503b65f848c73c1250e4f5749c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 00:09:40', '2021-10-26 00:09:40', '2022-10-25 18:09:40'),
('2fc7bbe6c9d121047d1f3125496930e184bcbff3335a8b807f4c763ed9f12e0c1d69ebfb364bd721', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 00:14:58', '2021-10-26 00:14:58', '2022-10-25 18:14:58'),
('b57bb7195b543bac00599e49ca65ec8783d08f9c65aef005c489dc5be0a588d3ea9f89b04dd84cdf', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 00:16:34', '2021-10-26 00:16:34', '2022-10-25 18:16:34'),
('22673b663f8dd002622ddfe2e58a9b40537f91d5460a8372dca64e62d6bbe91741e69b006f8679e3', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 00:19:43', '2021-10-26 00:19:43', '2022-10-25 18:19:43'),
('64418a2712e7f2f341c6484450798853283c96f54132783442168066a748e14f84aab2827b835007', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 04:36:51', '2021-10-26 04:36:51', '2022-10-25 22:36:51'),
('ae74222b6bc99782c618e38fe1683eb985486c73aaed5836ea18cef75237cd11aac59bf752cd3d04', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 04:42:39', '2021-10-26 04:42:39', '2022-10-25 22:42:39'),
('de33ccdfe73135977be20053db79a46ea0959e88d620fff822d244100e0d2fd6085948353098b4c5', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 04:44:43', '2021-10-26 04:44:43', '2022-10-25 22:44:43'),
('92fe0bd2d6f39d889b93de45c302dcae1674222e68011ea861f3c1be0092fe55e268ddba04179247', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 04:55:27', '2021-10-26 04:55:27', '2022-10-25 22:55:27'),
('c13d66b4662eb32d2843fb62cb3e3217d682202cf1945cebb5b7f9e646eff6d905ae202ac399be2c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 04:59:26', '2021-10-26 04:59:26', '2022-10-25 22:59:26'),
('00e517ae0f1d67831af71174c092c96419e2fad81e67a39ef3fcf03023b64380a4289f7557f6d92d', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-26 05:03:03', '2021-10-26 05:03:03', '2022-10-25 23:03:03'),
('615a428aea7f9148039baaf90a09114bc50faf90fe55d719559c264aaf0ffcb06b83b8ad2b17c106', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 05:05:28', '2021-10-26 05:05:28', '2022-10-25 23:05:28'),
('867b680b8ca0829ab6bbe3fb8c6aa4a775e6b96c26bcf9bd17205f55bc1144aea9c78b5b6c8a140a', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-26 18:58:48', '2021-10-26 18:58:48', '2022-10-26 12:58:48'),
('c5eba6ebd32bc3a5fbcd8662faed75974b9a4f03adeb0e60f1cbd52a98a829ed76cdcecffd581ba6', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-27 20:31:43', '2021-10-27 20:31:43', '2022-10-27 14:31:43'),
('336e7b6b42935db1499c88b7a8dd78c7b183e2e300a82595915b04d141139c241b589efe3a631078', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-27 20:35:33', '2021-10-27 20:35:33', '2022-10-27 14:35:33'),
('94b466efe82ec4a2f4e68a9fd4bf2b61e6f855ef78813da8b52610a59ec45909317f609225e58434', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-27 21:31:48', '2021-10-27 21:31:48', '2022-10-27 15:31:48'),
('d2fd94153396eefe8824351424e4a34480dbd632b8d394f2c9fff89a18941f6c91fa4e7e6e7274dd', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-10-27 22:35:26', '2021-10-27 22:35:26', '2022-10-27 16:35:26'),
('46d83d94a006d9a801d3f2be230a2017bc0a54218caad5d62bac9a55fce7875fbae0cdf46ed126c5', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-27 23:16:20', '2021-10-27 23:16:20', '2022-10-27 17:16:20'),
('beab31425b7f3b36e602c5e7545355dc87d312d0b31720a087722a0b9378285c4a6a63f267b1f8e1', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-10-28 05:58:02', '2021-10-28 05:58:02', '2022-10-27 23:58:02'),
('2658c324b4b2b232343b78841c32f638761bc780fe18e45b41152eee5fe61db06022ec22582c9cdd', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 0, '2021-10-28 21:06:05', '2021-10-28 21:06:05', '2022-10-28 15:06:05'),
('f1f0e693929c30f7749e84d9352973f47540fb74bc16340b4f03ecc7b536ff4d2788036171bcdb22', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-01 21:32:00', '2021-11-01 21:32:00', '2022-11-01 15:32:00'),
('431ff14101a344444398fc88a5fd664732a8cef670afc37a1f967a3f0ea4358fcf3dea0df9006d78', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-03 01:16:35', '2021-11-03 01:16:35', '2022-11-02 19:16:35'),
('4bba6d3d3845f92cd838e105075488e43cb14fe89d3dc40115117e65f0ae35c1612715a704e6e783', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-03 01:40:56', '2021-11-03 01:40:56', '2022-11-02 19:40:56'),
('d20a97cdef14d4bf2c7364c2b44aa450e1704b9c8ddb5fb2617a7dc24cab7ff964e9b8ade97ef380', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-11-03 01:41:11', '2021-11-03 01:41:11', '2022-11-02 19:41:11'),
('2166647c9b9885e22f58ed83a0a4d24e8c64c03a31754db20a9203a62a93f905080f5cfdbd57be89', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-07 02:15:54', '2021-11-07 02:15:54', '2022-11-06 20:15:54'),
('677ee68bb77fd6a2fd539398499e278715f8d0fb97142219a2ec7ab3936b6541da3576dd8bdbc337', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-07 02:18:20', '2021-11-07 02:18:20', '2022-11-06 20:18:20'),
('fe0cff837f4b416c4fae9db709b6a99d1224d40d3e6ca9e29105ca3757b779974481c98b838e391d', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-07 02:24:23', '2021-11-07 02:24:23', '2022-11-06 20:24:23'),
('2fc132f8382f333c963d0b161df06710471bce8886cd27268b1e95fb8b56a9bb3c300a0e3c143c61', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-07 02:26:09', '2021-11-07 02:26:09', '2022-11-06 20:26:09'),
('aa5255d191708e3b703b1b84078b7d36b853a33653f682d1c592695b8cd0f60d197349bc89517d73', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-08 21:52:11', '2021-11-08 21:52:11', '2022-11-08 14:52:11'),
('0c3028708c48c3572a19f6358c92b98d72da5a85c936603a7c096fcdbe44dee9ec1ad8d2f84d6546', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-11-09 01:15:27', '2021-11-09 01:15:27', '2022-11-08 18:15:27'),
('62b620bfc1a89ff19b5ed1375f3e5b14ec1a971b5471078a471f8ec25c78e817c6cd0e9c43c9978b', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 01:43:21', '2021-11-09 01:43:21', '2022-11-08 18:43:21'),
('8107f35485c4816acda066d3ba7af319301599a1dbc2dd7350386ef2e01410b050ecb3b3f46f8636', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-09 02:46:43', '2021-11-09 02:46:43', '2022-11-08 19:46:43'),
('4baf3505e3e5bcb4e7929dbfa999a1743ac017d3cf1d8c9f85a58378a19db29dc1ae0afc4982e69e', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 02:58:48', '2021-11-09 02:58:48', '2022-11-08 19:58:48'),
('2b146bbae34debe8cdff4e68d5cf531e168a76764f909f704ab4daaf5ff515820ca5f41c577205d7', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-09 02:59:55', '2021-11-09 02:59:55', '2022-11-08 19:59:55'),
('24e3fac9c99e2f3cf47a9616171b6749647142e954211c78cbc997be08574db8e4dbd3a92a54afe3', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 03:01:57', '2021-11-09 03:01:57', '2022-11-08 20:01:57'),
('371bb47783a0fed722cdb11fd84eb1cf5f8b409b8ccf23f801a1e6e83663b9d82f5e85794e882605', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 03:18:53', '2021-11-09 03:18:53', '2022-11-08 20:18:53'),
('3d61c1f2242c3cb8521f57c6fff69f56fb72e1c926b1e410839f9a0947f6c2d0557a456d2fa07d03', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 05:55:44', '2021-11-09 05:55:44', '2022-11-08 22:55:44'),
('fd6a352c36099ea66b495dad9274ae31d1af201a2d2c8585c932d6964df06b06fc93ca52ddf3fffe', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 08:33:52', '2021-11-09 08:33:52', '2022-11-09 01:33:52'),
('8f4510d1ac74ae006961506d923c1a2a16b6909515bf53d83e88950fe9c716119e0df5c02e38ab02', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-09 08:36:01', '2021-11-09 08:36:01', '2022-11-09 01:36:01'),
('d5eaca18ec68b85a9d23925e7eef4c8bacfe8eeda709e330cd395a52c11bcf97933692f04444cd1a', 2, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 0, '2021-11-10 08:12:32', '2021-11-10 08:12:32', '2022-11-10 01:12:32'),
('73441a5581401b11b98dd5dc758d9d2bd3c14371dc2669f2c5d77cb17a0d5259d22ee2626a076dd7', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-23 16:05:25', '2021-11-23 16:05:25', '2022-11-23 09:05:25'),
('607bc9b66293303ce4785dc1288d96e0ac3aff3863e81652eaf55e56822b530d5f60618ca10d358f', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-23 20:02:08', '2021-11-23 20:02:08', '2022-11-23 13:02:08'),
('936b0932421ad5690e4bed2a2ca87ae24f7df5f42bee2636f6c96e09ea2672b42c3d8458526d311d', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-24 02:26:28', '2021-11-24 02:26:28', '2022-11-23 19:26:28'),
('246b23f3bf2106be6df569f1dc7d508f8e93e386661252bf9d170fb52b654e0b8b848355c2ca0eae', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-24 02:43:47', '2021-11-24 02:43:47', '2022-11-23 19:43:47'),
('75293ed45033496319690c5c712c6485e319ee2d7898530a543bd9a4ee798bb21059278e63b3b21f', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-25 01:40:46', '2021-11-25 01:40:46', '2022-11-24 18:40:46'),
('3a3a02ce62f03b1feae7027048f927022732ae5f7073f6c0de8037efa508405d5735f52ac4d1d55c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-25 01:56:08', '2021-11-25 01:56:08', '2022-11-24 18:56:08'),
('816c9fd99502a995a4a2fc8e654cc07197b5545f111987bb0c7754e3ec764b92c88874fcc01e3f31', 3, 1, 'access_token', '[\"user_scope\",\"manage_own_content\"]', 1, '2021-11-25 02:23:51', '2021-11-25 02:23:51', '2022-11-24 19:23:51'),
('dd44685695e5a339e18105bc3c2f3df515a5f851376f5835c04d0758d677f423edc103b92b83756f', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-25 02:26:19', '2021-11-25 02:26:19', '2022-11-24 19:26:19'),
('14e19ca21839ad11730faefa9ead388ec4944907db1d7dedc755bf92cc2aa89dc1548a03321c794c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-11-25 02:26:38', '2021-11-25 02:26:38', '2022-11-24 19:26:38'),
('08e849554f9ba0e21ecd5d9d6ea1f4a980ea5632228efa52588c565759b24e92731c006403856bbb', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-11-27 01:38:41', '2021-11-27 01:38:41', '2022-11-26 18:38:41'),
('c2649b579c70251c43277a86620f6ddb7fe8cd5799863eca7d8c26b3567daa53cc408e70ef436eff', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-11-27 01:46:16', '2021-11-27 01:46:16', '2022-11-26 18:46:16'),
('23fcf078172ad1a835c577abcb3007adcc8c8a07abad81f5b1dc903dcd4ef7802f24eef8ecda950d', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-12-21 03:18:12', '2021-12-21 03:18:12', '2022-12-20 20:18:12'),
('5e8f801f80b27b497a7015568ba3bbefe5f464ba08e8a839fb36145ef11638849bd6717096135210', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-12-25 01:33:42', '2021-12-25 01:33:42', '2022-12-25 07:03:42'),
('9425d04258ca03765d68803c52483c644ceadcc8d7b30f45b3d94d963406075ca25df5561d5ac26c', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-12-25 09:00:04', '2021-12-25 09:00:04', '2022-12-25 14:30:04'),
('c96854a868830b91aa6b45dcf0c71154f6fd4ee3063a671bf2fa7062c423276c818debafd3d645ea', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-12-25 14:31:07', '2021-12-25 14:31:07', '2022-12-25 20:01:07'),
('a8b34a46b3b0f88e95c01cbe874251ed65e586ce6df5eb8bc1b32fe0037c4fad986086b05a36ad88', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 1, '2021-12-31 03:25:25', '2021-12-31 03:25:25', '2022-12-31 08:55:25'),
('f16213aae9c852229f0a2c3c02213f6980faf232f73200ad4d23640d222d9b41158959180bde063b', 1, 1, 'access_token', '[\"user_scope\",\"manage_own_content\",\"manage_everything\"]', 0, '2021-12-31 03:44:37', '2021-12-31 03:44:37', '2022-12-31 09:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Ipmx Personal Access Client', 'nPtRpnABduZKN662SMtHDONoMSJLPwbUAbK7vsM2', NULL, 'http://localhost', 1, 0, 0, '2021-10-14 21:19:41', '2021-10-14 21:19:41'),
(2, NULL, 'Ipmx Password Grant Client', 'U0SS0UkiEFsn91drYruNgE54Yd8UY8owgtEaDOyr', 'users', 'http://localhost', 0, 1, 0, '2021-10-14 21:19:41', '2021-10-14 21:19:41');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-10-14 21:19:41', '2021-10-14 21:19:41');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blank` tinyint(1) DEFAULT 0,
  `isEditable` tinyint(1) NOT NULL DEFAULT 1,
  `showLinkOnTheRightSidebar` tinyint(1) DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `icon`, `blank`, `isEditable`, `showLinkOnTheRightSidebar`, `title`, `content`, `path`, `description`, `created_at`, `updated_at`) VALUES
(1, 'charts', '', 0, 1, NULL, 'Charts', NULL, '/browse/charts', '', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Home', 'home', 0, 1, 1, 'Explore', NULL, '/home', 'Explore & enjoy listening to music', '2021-10-14 21:19:43', '2021-11-08 21:27:58'),
(3, 'About Us', '', 1, 1, NULL, 'About Us', '\n            <h1>About Us Sample</h1>\n            <br/>\n            <p>You should add your own \"About us\" description here or disable this page.</p>\n            <div class=\"boxed\"><div id=\"lipsum\">\n            <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut auctor dolor. Pellentesque fringilla lacus sit amet massa euismod pulvinar. Praesent ac erat nibh. Maecenas at imperdiet est, at fringilla ante. Phasellus fermentum nisi vitae faucibus laoreet. Nulla sit amet posuere metus. Donec quis neque a augue tempus vulputate at non urna. Aenean porta metus sit amet tellus mattis sodales. Suspendisse ac nulla massa. Curabitur auctor porta laoreet. Nullam vel quam lorem. Aenean ornare a purus eget dictum.\n            </p>\n            <p>\n            Morbi egestas convallis sem quis sollicitudin. Fusce vitae purus tortor. Vestibulum finibus orci purus, quis sodales nunc pulvinar sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In luctus felis a ex sagittis congue. Nunc vel bibendum ligula. Nulla a vehicula urna. Cras suscipit pretium ipsum, eu feugiat risus tincidunt at. Pellentesque imperdiet sem id risus facilisis, nec aliquet libero aliquet. Mauris ultrices interdum ante quis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae malesuada ante. Nam euismod felis commodo nulla lobortis, eu fermentum magna varius. Sed ut mauris lobortis, dapibus ipsum quis, iaculis libero. Mauris blandit, turpis vel convallis faucibus, erat massa luctus massa, at viverra magna odio non tellus.\n            </p>\n            <p>\n            Aliquam nibh elit, ornare vitae elementum id, vulputate a neque. Duis porta placerat tincidunt. Ut convallis lectus ligula, ut imperdiet mauris sagittis sit amet. Fusce sit amet faucibus enim. Cras rutrum nisi eget porta lobortis. Ut quam elit, finibus sit amet neque ac, dapibus fringilla urna. Duis ultrices dapibus sem, nec suscipit metus vehicula at. Pellentesque facilisis purus nec pretium tincidunt. Nam aliquet nibh quis nisl dignissim fermentum. Curabitur eget ipsum ultricies, sollicitudin ex sit amet, rhoncus nisl. Nunc tincidunt purus pretium, suscipit nulla sit amet, congue nibh. Aenean tempus aliquet ante, imperdiet luctus nunc sagittis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor, placerat nisl vitae, fringilla diam. Duis tempor diam ut felis sagittis porttitor. Suspendisse consectetur ipsum ipsum, vulputate suscipit odio volutpat a.\n            </p>\n            <p>\n            Donec a sapien purus. Vivamus a diam eros. Sed pellentesque facilisis lacinia. Donec molestie, ante ac sodales eleifend, purus nisi hendrerit sem, nec pellentesque purus odio eget purus. Pellentesque pharetra libero et enim faucibus, non ultricies elit facilisis. Proin commodo lacinia odio in lobortis. Phasellus cursus quam ut libero aliquam tincidunt. Suspendisse eu lacus blandit, tempor nisl vel, mollis mi. Curabitur lacus ipsum, ullamcorper blandit vehicula at, aliquet vitae ligula. Mauris accumsan nunc a nisi scelerisque, vitae efficitur erat egestas. Sed gravida ac ex a egestas.\n            </p>\n            <p>\n            In tellus velit, scelerisque mollis malesuada quis, lobortis ut purus. Suspendisse potenti. Vestibulum at venenatis nulla. Mauris in elit a sapien venenatis imperdiet eget vel augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam vitae augue bibendum bibendum et quis ligula. Duis facilisis aliquet justo vel pellentesque. Mauris ut fermentum nisi. Donec tincidunt felis ut enim ultrices accumsan.\n            </p></div>\n            ', '/about-us', 'Read more about us', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Privacy Policy', '', 1, 1, NULL, 'Privacy policy', '\n            <h1>Privacy policy Page Sample</h1>\n            <br />\n            <p>You should add your own \"Privacy Policy\" description here or disable this page.</p>\n            <div class=\"boxed\"><div id=\"lipsum\">\n            <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut auctor dolor. Pellentesque fringilla lacus sit amet massa euismod pulvinar. Praesent ac erat nibh. Maecenas at imperdiet est, at fringilla ante. Phasellus fermentum nisi vitae faucibus laoreet. Nulla sit amet posuere metus. Donec quis neque a augue tempus vulputate at non urna. Aenean porta metus sit amet tellus mattis sodales. Suspendisse ac nulla massa. Curabitur auctor porta laoreet. Nullam vel quam lorem. Aenean ornare a purus eget dictum.\n            </p>\n            <p>\n            Morbi egestas convallis sem quis sollicitudin. Fusce vitae purus tortor. Vestibulum finibus orci purus, quis sodales nunc pulvinar sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In luctus felis a ex sagittis congue. Nunc vel bibendum ligula. Nulla a vehicula urna. Cras suscipit pretium ipsum, eu feugiat risus tincidunt at. Pellentesque imperdiet sem id risus facilisis, nec aliquet libero aliquet. Mauris ultrices interdum ante quis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae malesuada ante. Nam euismod felis commodo nulla lobortis, eu fermentum magna varius. Sed ut mauris lobortis, dapibus ipsum quis, iaculis libero. Mauris blandit, turpis vel convallis faucibus, erat massa luctus massa, at viverra magna odio non tellus.\n            </p>\n            <p>\n            Aliquam nibh elit, ornare vitae elementum id, vulputate a neque. Duis porta placerat tincidunt. Ut convallis lectus ligula, ut imperdiet mauris sagittis sit amet. Fusce sit amet faucibus enim. Cras rutrum nisi eget porta lobortis. Ut quam elit, finibus sit amet neque ac, dapibus fringilla urna. Duis ultrices dapibus sem, nec suscipit metus vehicula at. Pellentesque facilisis purus nec pretium tincidunt. Nam aliquet nibh quis nisl dignissim fermentum. Curabitur eget ipsum ultricies, sollicitudin ex sit amet, rhoncus nisl. Nunc tincidunt purus pretium, suscipit nulla sit amet, congue nibh. Aenean tempus aliquet ante, imperdiet luctus nunc sagittis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor, placerat nisl vitae, fringilla diam. Duis tempor diam ut felis sagittis porttitor. Suspendisse consectetur ipsum ipsum, vulputate suscipit odio volutpat a.\n            </p>\n            <p>\n            Donec a sapien purus. Vivamus a diam eros. Sed pellentesque facilisis lacinia. Donec molestie, ante ac sodales eleifend, purus nisi hendrerit sem, nec pellentesque purus odio eget purus. Pellentesque pharetra libero et enim faucibus, non ultricies elit facilisis. Proin commodo lacinia odio in lobortis. Phasellus cursus quam ut libero aliquam tincidunt. Suspendisse eu lacus blandit, tempor nisl vel, mollis mi. Curabitur lacus ipsum, ullamcorper blandit vehicula at, aliquet vitae ligula. Mauris accumsan nunc a nisi scelerisque, vitae efficitur erat egestas. Sed gravida ac ex a egestas.\n            </p>\n            <p>\n            In tellus velit, scelerisque mollis malesuada quis, lobortis ut purus. Suspendisse potenti. Vestibulum at venenatis nulla. Mauris in elit a sapien venenatis imperdiet eget vel augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam vitae augue bibendum bibendum et quis ligula. Duis facilisis aliquet justo vel pellentesque. Mauris ut fermentum nisi. Donec tincidunt felis ut enim ultrices accumsan.\n            </p></div>\n            ', '/privacy-policy', 'Read about our privacy policy', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Terms of Service', '', 1, 1, NULL, 'Terms of Service', '\n            <h1>Terms of Service Page Sample</h1>\n            <br />\n            <p>You should add your own \"Terms of Service\" description here or disable this page.</p>\n            <div class=\"boxed\"><div id=\"lipsum\">\n            <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut auctor dolor. Pellentesque fringilla lacus sit amet massa euismod pulvinar. Praesent ac erat nibh. Maecenas at imperdiet est, at fringilla ante. Phasellus fermentum nisi vitae faucibus laoreet. Nulla sit amet posuere metus. Donec quis neque a augue tempus vulputate at non urna. Aenean porta metus sit amet tellus mattis sodales. Suspendisse ac nulla massa. Curabitur auctor porta laoreet. Nullam vel quam lorem. Aenean ornare a purus eget dictum.\n            </p>\n            <p>\n            Morbi egestas convallis sem quis sollicitudin. Fusce vitae purus tortor. Vestibulum finibus orci purus, quis sodales nunc pulvinar sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In luctus felis a ex sagittis congue. Nunc vel bibendum ligula. Nulla a vehicula urna. Cras suscipit pretium ipsum, eu feugiat risus tincidunt at. Pellentesque imperdiet sem id risus facilisis, nec aliquet libero aliquet. Mauris ultrices interdum ante quis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae malesuada ante. Nam euismod felis commodo nulla lobortis, eu fermentum magna varius. Sed ut mauris lobortis, dapibus ipsum quis, iaculis libero. Mauris blandit, turpis vel convallis faucibus, erat massa luctus massa, at viverra magna odio non tellus.\n            </p>\n            <p>\n            Aliquam nibh elit, ornare vitae elementum id, vulputate a neque. Duis porta placerat tincidunt. Ut convallis lectus ligula, ut imperdiet mauris sagittis sit amet. Fusce sit amet faucibus enim. Cras rutrum nisi eget porta lobortis. Ut quam elit, finibus sit amet neque ac, dapibus fringilla urna. Duis ultrices dapibus sem, nec suscipit metus vehicula at. Pellentesque facilisis purus nec pretium tincidunt. Nam aliquet nibh quis nisl dignissim fermentum. Curabitur eget ipsum ultricies, sollicitudin ex sit amet, rhoncus nisl. Nunc tincidunt purus pretium, suscipit nulla sit amet, congue nibh. Aenean tempus aliquet ante, imperdiet luctus nunc sagittis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut eros auctor, placerat nisl vitae, fringilla diam. Duis tempor diam ut felis sagittis porttitor. Suspendisse consectetur ipsum ipsum, vulputate suscipit odio volutpat a.\n            </p>\n            <p>\n            Donec a sapien purus. Vivamus a diam eros. Sed pellentesque facilisis lacinia. Donec molestie, ante ac sodales eleifend, purus nisi hendrerit sem, nec pellentesque purus odio eget purus. Pellentesque pharetra libero et enim faucibus, non ultricies elit facilisis. Proin commodo lacinia odio in lobortis. Phasellus cursus quam ut libero aliquam tincidunt. Suspendisse eu lacus blandit, tempor nisl vel, mollis mi. Curabitur lacus ipsum, ullamcorper blandit vehicula at, aliquet vitae ligula. Mauris accumsan nunc a nisi scelerisque, vitae efficitur erat egestas. Sed gravida ac ex a egestas.\n            </p>\n            <p>\n            In tellus velit, scelerisque mollis malesuada quis, lobortis ut purus. Suspendisse potenti. Vestibulum at venenatis nulla. Mauris in elit a sapien venenatis imperdiet eget vel augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam vitae augue bibendum bibendum et quis ligula. Duis facilisis aliquet justo vel pellentesque. Mauris ut fermentum nisi. Donec tincidunt felis ut enim ultrices accumsan.\n            </p></div>\n            ', '/terms-of-service', 'Terms of Service page description', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Store', 'shopping', 0, 1, 1, 'Store', NULL, '/store', 'Explore our amazing tracks & choose your license', '2021-10-14 21:19:43', '2021-10-20 05:09:17');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payouts`
--

CREATE TABLE `payouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` int(11) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payout_methods`
--

CREATE TABLE `payout_methods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `minimum` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payout_methods`
--

INSERT INTO `payout_methods` (`id`, `name`, `minimum`, `description`) VALUES
(1, 'PayPal', 5000, 'Enter your PayPal address to receive your payout. Minimum payout amount is 50$.'),
(2, 'Perfect Money', 5000, 'Enter your Perfect Money address to receive your payout. Minimum payout amount is 50$.'),
(3, 'Bitcoin', 5000, 'Enter your BTC wallet to receive your payout. Minimum payout amount is equivalent to 50$.'),
(4, 'Bank Transfer', 10000, 'Enter your Bank Transfer details to receive your payout. Minimum payout amount is 100$.');

-- --------------------------------------------------------

--
-- Table structure for table `payout_method_artist`
--

CREATE TABLE `payout_method_artist` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` int(11) NOT NULL,
  `payout_method_id` int(11) NOT NULL,
  `payout_details` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'Upload songs', '', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Download songs', 'download songs & podcast episodes.', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Chat with friends', '', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Listen with friends', 'Listen with friends to the same song at the same time.', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Publish songs', 'Ability to change songs privacy to public.', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Publish playlists', 'Ability to change playlists privacy to public.', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(7, 'No ads', 'Does not see advertisements.', 3, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(8, 'CED songs(artist)', 'Create, edit and delete songs.', 2, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(9, 'CED albums(artist)', 'Create, edit and delete albums.', 2, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(10, 'CED podcasts(artist)', 'Create, edit and delete podcasts.', 2, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(11, 'CED translations', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(12, 'contact', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(13, 'View sales', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(14, 'View payouts', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(15, 'Edit appearance', 'Ability to change how the player interface appearance @admin/appearance.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(16, 'Edit settings', 'Change the settings of the application @admin/settings.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(17, 'Edit advertisements', 'Change the advertisements settings.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(18, 'CED pages', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(19, 'CED radio_stations', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(20, 'CED plans', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(21, 'CED subscriptions', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(22, 'Create users', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(23, 'Edit users', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(24, 'Read users', 'Can see the users data.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(25, 'Delete users', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(26, 'Create artists', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(27, 'Edit artists', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(28, 'Read artists', 'Can see the artists data.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(29, 'Delete artists', '', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(30, 'CED songs', 'Create, edit and delete songs.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(31, 'CED playlists', 'Create, edit and delete playlists.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(32, 'CED song_genres', 'Create, edit and delete song genres.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(33, 'CED podcast_genres', 'Create, edit and delete podcast genres.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(34, 'CED radio stations', 'Create, edit and delete radio stations.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(35, 'CED albums', 'Create, edit and delete albums.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(36, 'CED podcasts', 'Create, edit and delete podcasts.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(37, 'Read roles', 'Can see the roles and their permissions.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(38, 'Edit roles', 'Edit or Delete role permissions.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(39, 'Edit user roles', 'Edit or Delete roles for a user.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(40, 'Edit user permissions', 'Edit or Delete permissions for a user.', 1, '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `upgradable` tinyint(1) NOT NULL DEFAULT 1,
  `badge` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `position` int(11) NOT NULL,
  `free` tinyint(1) NOT NULL DEFAULT 1,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_symbol` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interval` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paypal_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interval_count` int(11) NOT NULL,
  `recommended` tinyint(1) NOT NULL,
  `displayed_features` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `storage_space` bigint(20) NOT NULL DEFAULT 100,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `active`, `upgradable`, `badge`, `amount`, `position`, `free`, `currency`, `currency_symbol`, `interval`, `stripe_id`, `paypal_id`, `interval_count`, `recommended`, `displayed_features`, `storage_space`, `created_at`, `updated_at`) VALUES
(1, 'Free User Account', 1, 1, NULL, 0, 1, 1, 'USD', NULL, 'month', NULL, NULL, 1, 0, '[\"Up to 100MB of storage\",\"Create Playlists & Share\",\"Unlimited Downloads\"]', 10, '2021-10-14 21:19:43', '2021-10-26 06:55:57'),
(2, 'Premium User Account', 1, 1, NULL, 999, 2, 0, 'USD', '$', 'month', 'plan_KSq5EmhFiHFjXg', NULL, 1, 0, '[]', 10240, '2021-10-24 06:18:08', '2021-10-27 21:00:06');

-- --------------------------------------------------------

--
-- Table structure for table `plan_permission`
--

CREATE TABLE `plan_permission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` int(10) UNSIGNED NOT NULL,
  `permission_id` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plan_permission`
--

INSERT INTO `plan_permission` (`id`, `plan_id`, `permission_id`) VALUES
(61, 2, 1),
(60, 2, 10),
(59, 2, 8),
(58, 2, 9),
(57, 2, 3),
(56, 2, 4),
(55, 2, 6),
(43, 1, 8),
(54, 2, 7),
(53, 2, 5),
(62, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `plan_role`
--

CREATE TABLE `plan_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `plan_id` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plan_role`
--

INSERT INTO `plan_role` (`id`, `role_id`, `plan_id`) VALUES
(8, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `title`, `user_id`, `cover`, `created_by`, `public`, `created_at`, `updated_at`) VALUES
(17415, 'IPMX Top 50', '1', '{\"path\":\"\\/covers\\/playlists\\/435976628192.png\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/playlists\\/435976628192.png\"}', 'admin', 1, '2021-10-28 06:32:42', '2021-10-28 06:32:42'),
(17416, 'My playlist', '2', '{\"path\":\"\\/storage\\/defaults\\/images\\/playlist_cover.png\",\"disk\":\"public\",\"url\":null}', 'user', 0, '2021-11-09 05:46:43', '2021-11-09 05:47:03');

-- --------------------------------------------------------

--
-- Table structure for table `playlist_song`
--

CREATE TABLE `playlist_song` (
  `id` int(10) UNSIGNED NOT NULL,
  `song_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `song_origin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `playlist_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `playlist_song`
--

INSERT INTO `playlist_song` (`id`, `song_id`, `song_origin`, `playlist_id`) VALUES
(1, '1687420', 'local', 17415),
(2, '1687418', 'local', 17415),
(3, '1687417', 'local', 17415),
(4, '1687420', 'local', 17416);

-- --------------------------------------------------------

--
-- Table structure for table `plays`
--

CREATE TABLE `plays` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_play_expectation` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plays`
--

INSERT INTO `plays` (`id`, `content_type`, `content_id`, `content_source`, `end_play_expectation`, `user_id`, `artist_id`, `created_at`, `updated_at`) VALUES
(1, 'radio-sation', '1687415', 'local', '2021-10-15 09:02:04', 1, NULL, '2021-10-15 08:02:04', '2021-10-15 08:02:04'),
(2, 'album', '68789', 'local', '2021-10-15 09:05:26', 1, NULL, '2021-10-15 08:05:26', '2021-10-15 08:05:26'),
(3, 'radio-sation', '1687415', 'local', '2021-10-15 09:05:26', 1, NULL, '2021-10-15 08:05:26', '2021-10-15 08:05:26'),
(4, 'album', '68789', 'local', '2021-10-15 09:07:13', 1, NULL, '2021-10-15 08:07:13', '2021-10-15 08:07:13'),
(5, 'radio-sation', '1687415', 'local', '2021-10-15 09:07:13', 1, NULL, '2021-10-15 08:07:13', '2021-10-15 08:07:13'),
(6, 'radio-sation', '1687415', '', '2021-10-15 02:57:31', NULL, NULL, '2021-10-15 08:57:31', '2021-10-15 08:57:31'),
(7, 'radio-sation', '1687415', '', '2021-10-15 02:57:38', NULL, NULL, '2021-10-15 08:57:38', '2021-10-15 08:57:38'),
(8, 'album', '68789', '', '2021-10-15 02:59:00', NULL, NULL, '2021-10-15 08:59:00', '2021-10-15 08:59:00'),
(9, 'radio-sation', '1687415', '', '2021-10-15 02:59:00', NULL, NULL, '2021-10-15 08:59:00', '2021-10-15 08:59:00'),
(10, 'album', '68789', '', '2021-10-15 02:59:02', NULL, NULL, '2021-10-15 08:59:02', '2021-10-15 08:59:02'),
(11, 'album', '68790', '', '2021-10-16 21:39:27', NULL, NULL, '2021-10-17 03:39:27', '2021-10-17 03:39:27'),
(12, 'album', '68790', '', '2021-10-16 21:39:29', NULL, NULL, '2021-10-17 03:39:29', '2021-10-17 03:39:29'),
(13, 'album', '68790', 'local', '2021-10-18 07:44:05', 1, NULL, '2021-10-18 06:44:05', '2021-10-18 06:44:05'),
(14, 'song', '1687417', 'local', '2021-10-18 06:47:48', 1, NULL, '2021-10-18 06:44:05', '2021-10-18 06:44:05'),
(15, 'album', '68790', '', '2021-10-18 14:32:52', NULL, NULL, '2021-10-18 20:32:52', '2021-10-18 20:32:52'),
(16, 'song', '1687417', '', '2021-10-18 14:32:52', NULL, NULL, '2021-10-18 20:32:52', '2021-10-18 20:32:52'),
(17, 'album', '68790', '', '2021-10-18 14:32:53', NULL, NULL, '2021-10-18 20:32:53', '2021-10-18 20:32:53'),
(18, 'song', '1687417', '', '2021-10-18 14:32:59', NULL, NULL, '2021-10-18 20:32:59', '2021-10-18 20:32:59'),
(19, 'album', '68790', 'local', '2021-10-18 22:12:44', 1, NULL, '2021-10-18 21:12:44', '2021-10-18 21:12:44'),
(20, 'song', '1687417', 'local', '2021-10-18 21:16:27', 1, NULL, '2021-10-18 21:12:44', '2021-10-18 21:12:44'),
(21, 'song', '1687418', 'local', '2021-10-18 21:16:17', 1, NULL, '2021-10-18 21:12:49', '2021-10-18 21:12:49'),
(22, 'album', '68790', '', '2021-10-19 22:37:17', NULL, NULL, '2021-10-20 04:37:17', '2021-10-20 04:37:17'),
(23, 'song', '1687417', '', '2021-10-19 22:37:17', NULL, NULL, '2021-10-20 04:37:17', '2021-10-20 04:37:17'),
(24, 'album', '68790', '', '2021-10-19 22:37:27', NULL, NULL, '2021-10-20 04:37:27', '2021-10-20 04:37:27'),
(25, 'song', '1687417', '', '2021-10-19 22:37:28', NULL, NULL, '2021-10-20 04:37:28', '2021-10-20 04:37:28'),
(26, 'album', '68790', 'local', '2021-10-20 06:09:30', 1, NULL, '2021-10-20 05:09:30', '2021-10-20 05:09:30'),
(27, 'song', '1687417', 'local', '2021-10-20 05:13:13', 1, NULL, '2021-10-20 05:09:30', '2021-10-20 05:09:30'),
(28, 'song', '1687417', 'local', '2021-10-20 06:51:40', 1, NULL, '2021-10-20 06:47:57', '2021-10-20 06:47:57'),
(29, 'album', '68790', 'local', '2021-10-21 16:54:06', 1, NULL, '2021-10-21 15:54:06', '2021-10-21 15:54:06'),
(30, 'song', '1687417', 'local', '2021-10-21 15:57:49', 1, NULL, '2021-10-21 15:54:06', '2021-10-21 15:54:06'),
(31, 'album', '68790', 'local', '2021-10-21 16:54:14', 1, NULL, '2021-10-21 15:54:14', '2021-10-21 15:54:14'),
(32, 'radio-sation', '1', 'local', '2021-10-24 06:38:47', 1, NULL, '2021-10-24 05:38:47', '2021-10-24 05:38:47'),
(33, 'radio-sation', '1', 'local', '2021-10-24 06:40:04', 1, NULL, '2021-10-24 05:40:04', '2021-10-24 05:40:04'),
(34, 'radio-sation', '1', 'local', '2021-10-24 06:40:39', 1, NULL, '2021-10-24 05:40:39', '2021-10-24 05:40:39'),
(35, 'radio-sation', '1', 'local', '2021-10-24 06:42:22', 1, NULL, '2021-10-24 05:42:22', '2021-10-24 05:42:22'),
(36, 'radio-sation', '1', 'local', '2021-10-24 06:42:37', 1, NULL, '2021-10-24 05:42:37', '2021-10-24 05:42:37'),
(37, 'song', '1687417', 'local', '2021-10-24 05:50:15', 1, NULL, '2021-10-24 05:46:32', '2021-10-24 05:46:32'),
(38, 'radio-sation', '1', 'local', '2021-10-24 06:56:42', 1, NULL, '2021-10-24 05:56:42', '2021-10-24 05:56:42'),
(39, 'radio-sation', '1', 'local', '2021-10-24 07:56:13', 1, NULL, '2021-10-24 06:56:13', '2021-10-24 06:56:13'),
(40, 'radio-sation', '1', 'local', '2021-10-25 04:15:13', 1, NULL, '2021-10-25 03:15:13', '2021-10-25 03:15:13'),
(41, 'radio-sation', '1', 'local', '2021-10-25 04:15:28', 1, NULL, '2021-10-25 03:15:28', '2021-10-25 03:15:28'),
(42, 'song', '1687418', 'local', '2021-10-25 08:13:06', 1, NULL, '2021-10-25 08:09:38', '2021-10-25 08:09:38'),
(43, 'radio-sation', '1', 'local', '2021-10-25 09:09:44', 1, NULL, '2021-10-25 08:09:44', '2021-10-25 08:09:44'),
(44, 'song', '1687418', 'local', '2021-10-25 23:07:47', 1, NULL, '2021-10-25 23:04:19', '2021-10-25 23:04:19'),
(45, 'radio-sation', '1', 'local', '2021-10-26 00:04:24', 1, NULL, '2021-10-25 23:04:24', '2021-10-25 23:04:24'),
(46, 'radio-sation', '1', 'local', '2021-10-26 01:03:30', 1, NULL, '2021-10-26 00:03:30', '2021-10-26 00:03:30'),
(47, 'radio-sation', '1', 'local', '2021-10-26 01:03:46', 1, NULL, '2021-10-26 00:03:46', '2021-10-26 00:03:46'),
(48, 'album', '68790', '', '2021-10-25 19:13:50', NULL, NULL, '2021-10-26 01:13:50', '2021-10-26 01:13:50'),
(49, 'song', '1687417', '', '2021-10-25 19:13:50', NULL, NULL, '2021-10-26 01:13:50', '2021-10-26 01:13:50'),
(50, 'song', '1687417', '', '2021-10-25 19:14:05', NULL, NULL, '2021-10-26 01:14:05', '2021-10-26 01:14:05'),
(51, 'song', '1687417', '', '2021-10-25 19:14:07', NULL, NULL, '2021-10-26 01:14:07', '2021-10-26 01:14:07'),
(52, 'radio-sation', '1', 'local', '2021-10-26 06:35:24', 1, NULL, '2021-10-26 05:35:24', '2021-10-26 05:35:24'),
(54, 'radio-sation', '1', 'local', '2021-10-26 19:59:03', 1, NULL, '2021-10-26 18:59:03', '2021-10-26 18:59:03'),
(55, 'radio-sation', '1', 'local', '2021-10-26 19:59:17', 1, NULL, '2021-10-26 18:59:17', '2021-10-26 18:59:17'),
(56, 'radio-sation', '1', 'local', '2021-10-27 21:32:48', 2, NULL, '2021-10-27 20:32:48', '2021-10-27 20:32:48'),
(57, 'song', '1687420', 'local', '2021-10-27 23:15:00', 1, 4800, '2021-10-27 23:11:56', '2021-10-27 23:11:56'),
(58, 'song', '1687420', 'local', '2021-10-27 23:15:09', 1, 4800, '2021-10-27 23:12:05', '2021-10-27 23:12:05'),
(59, 'radio-sation', '1', 'local', '2021-10-28 00:15:35', 1, NULL, '2021-10-27 23:15:35', '2021-10-27 23:15:35'),
(60, 'song', '1687420', 'local', '2021-10-27 23:50:24', 1, 4800, '2021-10-27 23:47:20', '2021-10-27 23:47:20'),
(61, 'song', '1687420', 'local', '2021-10-28 06:01:26', 2, 4800, '2021-10-28 05:58:22', '2021-10-28 05:58:22'),
(62, 'song', '1687420', 'local', '2021-10-28 06:01:34', 2, 4800, '2021-10-28 05:58:30', '2021-10-28 05:58:30'),
(63, 'song', '1687418', 'local', '2021-10-28 06:06:17', 2, NULL, '2021-10-28 06:02:49', '2021-10-28 06:02:49'),
(64, 'song', '1687418', 'local', '2021-10-28 06:06:23', 2, NULL, '2021-10-28 06:02:55', '2021-10-28 06:02:55'),
(65, 'song', '1687420', 'local', '2021-10-28 06:24:56', 2, 4800, '2021-10-28 06:21:52', '2021-10-28 06:21:52'),
(66, 'radio-sation', '1', 'local', '2021-10-28 14:31:12', 2, NULL, '2021-10-28 13:31:12', '2021-10-28 13:31:12'),
(67, 'radio-sation', '1', 'local', '2021-10-28 14:31:19', 2, NULL, '2021-10-28 13:31:19', '2021-10-28 13:31:19'),
(68, 'song', '1687420', 'local', '2021-10-28 13:37:55', 2, 4800, '2021-10-28 13:34:51', '2021-10-28 13:34:51'),
(69, 'radio-sation', '1', 'local', '2021-10-28 14:34:55', 2, NULL, '2021-10-28 13:34:55', '2021-10-28 13:34:55'),
(70, 'song', '1687420', 'local', '2021-10-28 14:00:11', 2, 4800, '2021-10-28 13:57:07', '2021-10-28 13:57:07'),
(71, 'radio-sation', '1', 'local', '2021-10-28 23:51:40', 2, NULL, '2021-10-28 22:51:40', '2021-10-28 22:51:40'),
(72, 'radio-sation', '1', 'local', '2021-10-28 23:51:48', 2, NULL, '2021-10-28 22:51:48', '2021-10-28 22:51:48'),
(73, 'song', '1687420', '', '2021-10-28 20:33:04', NULL, NULL, '2021-10-29 02:33:04', '2021-10-29 02:33:04'),
(74, 'song', '1687420', '', '2021-10-28 20:33:13', NULL, NULL, '2021-10-29 02:33:13', '2021-10-29 02:33:13'),
(75, 'song', '1687420', '', '2021-11-02 19:40:22', NULL, NULL, '2021-11-03 01:40:22', '2021-11-03 01:40:22'),
(76, 'radio-sation', '1', 'local', '2021-11-05 01:01:14', 1, NULL, '2021-11-05 00:01:14', '2021-11-05 00:01:14'),
(77, 'radio-sation', '1', 'local', '2021-11-05 01:08:23', 1, NULL, '2021-11-05 00:08:23', '2021-11-05 00:08:23'),
(78, 'radio-sation', '1', 'local', '2021-11-05 01:08:27', 1, NULL, '2021-11-05 00:08:27', '2021-11-05 00:08:27'),
(79, 'radio-sation', '1', 'local', '2021-11-05 01:09:38', 1, NULL, '2021-11-05 00:09:38', '2021-11-05 00:09:38'),
(80, 'song', '1687420', 'local', '2021-11-05 02:19:36', 2, 4800, '2021-11-05 02:16:32', '2021-11-05 02:16:32'),
(81, 'song', '1687420', 'local', '2021-11-05 02:19:38', 2, 4800, '2021-11-05 02:16:34', '2021-11-05 02:16:34'),
(82, 'radio-sation', '1', 'local', '2021-11-06 06:44:24', 2, NULL, '2021-11-06 05:44:24', '2021-11-06 05:44:24'),
(83, 'radio-sation', '1', 'local', '2021-11-06 06:44:26', 2, NULL, '2021-11-06 05:44:26', '2021-11-06 05:44:26'),
(84, 'song', '1687420', 'local', '2021-11-06 05:47:40', 2, 4800, '2021-11-06 05:44:36', '2021-11-06 05:44:36'),
(85, 'radio-sation', '1', 'local', '2021-11-06 21:25:12', 2, NULL, '2021-11-06 20:25:12', '2021-11-06 20:25:12'),
(86, 'song', '1687420', 'local', '2021-11-07 02:08:26', 2, 4800, '2021-11-07 02:05:22', '2021-11-07 02:05:22'),
(87, 'radio-sation', '1', 'local', '2021-11-07 03:06:03', 1, NULL, '2021-11-07 02:06:03', '2021-11-07 02:06:03'),
(88, 'radio-sation', '1', 'local', '2021-11-07 03:08:37', 1, NULL, '2021-11-07 02:08:37', '2021-11-07 02:08:37'),
(89, 'radio-sation', '1', 'local', '2021-11-07 03:09:38', 1, NULL, '2021-11-07 02:09:38', '2021-11-07 02:09:38'),
(90, 'radio-sation', '1', 'local', '2021-11-07 03:09:41', 1, NULL, '2021-11-07 02:09:41', '2021-11-07 02:09:41'),
(91, 'song', '1687420', 'local', '2021-11-07 02:12:54', 1, 4800, '2021-11-07 02:09:50', '2021-11-07 02:09:50'),
(92, 'song', '1687418', 'local', '2021-11-07 02:13:21', 1, NULL, '2021-11-07 02:09:53', '2021-11-07 02:09:53'),
(93, 'song', '1687420', 'local', '2021-11-07 02:12:59', 1, 4800, '2021-11-07 02:09:55', '2021-11-07 02:09:55'),
(94, 'radio-sation', '1', 'local', '2021-11-07 03:17:27', 2, NULL, '2021-11-07 02:17:27', '2021-11-07 02:17:27'),
(95, 'radio-sation', '1', 'local', '2021-11-07 03:22:33', 1, NULL, '2021-11-07 02:22:33', '2021-11-07 02:22:33'),
(96, 'radio-sation', '1', 'local', '2021-11-07 03:22:35', 1, NULL, '2021-11-07 02:22:35', '2021-11-07 02:22:35'),
(97, 'song', '1687420', 'local', '2021-11-07 02:25:48', 1, 4800, '2021-11-07 02:22:44', '2021-11-07 02:22:44'),
(98, 'song', '1687420', 'local', '2021-11-07 02:30:14', 2, 4800, '2021-11-07 02:27:10', '2021-11-07 02:27:10'),
(99, 'radio-sation', '2', 'local', '2021-11-07 03:32:09', 2, NULL, '2021-11-07 02:32:09', '2021-11-07 02:32:09'),
(100, 'radio-sation', '1687421', 'local', '2021-11-07 03:34:11', 2, NULL, '2021-11-07 02:34:11', '2021-11-07 02:34:11'),
(101, 'song', '1687417', '', '2021-11-07 16:27:32', NULL, NULL, '2021-11-07 23:27:32', '2021-11-07 23:27:32'),
(102, 'song', '1687420', '', '2021-11-07 16:27:37', NULL, NULL, '2021-11-07 23:27:37', '2021-11-07 23:27:37'),
(103, 'song', '1687420', '', '2021-11-07 17:57:25', NULL, NULL, '2021-11-08 00:57:25', '2021-11-08 00:57:25'),
(104, 'song', '1687418', '', '2021-11-07 17:58:34', NULL, NULL, '2021-11-08 00:58:34', '2021-11-08 00:58:34'),
(105, 'song', '1687420', '', '2021-11-07 17:59:20', NULL, NULL, '2021-11-08 00:59:20', '2021-11-08 00:59:20'),
(106, 'radio-sation', '3', 'local', '2021-11-08 22:28:13', 1, NULL, '2021-11-08 21:28:13', '2021-11-08 21:28:13'),
(107, 'radio-sation', '3', 'local', '2021-11-08 22:28:17', 1, NULL, '2021-11-08 21:28:17', '2021-11-08 21:28:17'),
(108, 'radio-sation', '3', 'local', '2021-11-08 22:28:17', 1, NULL, '2021-11-08 21:28:17', '2021-11-08 21:28:17'),
(109, 'radio-sation', '3', 'local', '2021-11-08 22:44:44', 1, NULL, '2021-11-08 21:44:44', '2021-11-08 21:44:44'),
(110, 'radio-sation', '3', 'local', '2021-11-08 22:52:28', 1, NULL, '2021-11-08 21:52:28', '2021-11-08 21:52:28'),
(111, 'radio-sation', '3', 'local', '2021-11-08 22:52:33', 1, NULL, '2021-11-08 21:52:33', '2021-11-08 21:52:33'),
(112, 'radio-sation', '3', 'local', '2021-11-08 22:54:23', 1, NULL, '2021-11-08 21:54:23', '2021-11-08 21:54:23'),
(113, 'radio-sation', '3', 'local', '2021-11-08 22:54:25', 1, NULL, '2021-11-08 21:54:25', '2021-11-08 21:54:25'),
(114, 'song', '1687420', 'local', '2021-11-08 21:57:31', 1, 4800, '2021-11-08 21:54:27', '2021-11-08 21:54:27'),
(115, 'album', '68790', 'local', '2021-11-08 22:54:42', 1, NULL, '2021-11-08 21:54:42', '2021-11-08 21:54:42'),
(116, 'song', '1687417', 'local', '2021-11-08 21:58:25', 1, NULL, '2021-11-08 21:54:42', '2021-11-08 21:54:42'),
(117, 'radio-sation', '3', 'local', '2021-11-08 23:01:36', 1, NULL, '2021-11-08 22:01:36', '2021-11-08 22:01:36'),
(118, 'radio-sation', '3', 'local', '2021-11-08 23:01:38', 1, NULL, '2021-11-08 22:01:38', '2021-11-08 22:01:38'),
(119, 'song', '1687420', 'local', '2021-11-08 23:55:14', 2, 4800, '2021-11-08 23:52:10', '2021-11-08 23:52:10'),
(120, 'song', '1687420', 'local', '2021-11-08 23:55:15', 2, 4800, '2021-11-08 23:52:11', '2021-11-08 23:52:11'),
(121, 'radio-sation', '3', 'local', '2021-11-09 02:15:59', 1, NULL, '2021-11-09 01:15:59', '2021-11-09 01:15:59'),
(122, 'radio-sation', '3', 'local', '2021-11-09 02:30:42', 2, NULL, '2021-11-09 01:30:42', '2021-11-09 01:30:42'),
(123, 'radio-sation', '3', 'local', '2021-11-09 03:47:07', 2, NULL, '2021-11-09 02:47:07', '2021-11-09 02:47:07'),
(124, 'radio-sation', '3', 'local', '2021-11-09 03:53:05', 2, NULL, '2021-11-09 02:53:05', '2021-11-09 02:53:05'),
(125, 'radio-sation', '3', 'local', '2021-11-09 03:53:13', 2, NULL, '2021-11-09 02:53:13', '2021-11-09 02:53:13'),
(126, 'song', '1687418', 'local', '2021-11-09 03:07:15', 2, NULL, '2021-11-09 03:03:47', '2021-11-09 03:03:47'),
(127, 'song', '1687420', 'local', '2021-11-09 05:49:18', 2, 4800, '2021-11-09 05:46:14', '2021-11-09 05:46:14'),
(128, 'song', '1687420', 'local', '2021-11-09 05:49:18', 2, 4800, '2021-11-09 05:46:14', '2021-11-09 05:46:14'),
(129, 'radio-sation', '3', 'local', '2021-11-09 07:51:41', 1, NULL, '2021-11-09 06:51:41', '2021-11-09 06:51:41'),
(130, 'radio-sation', '3', 'local', '2021-11-10 09:12:50', 2, NULL, '2021-11-10 08:12:50', '2021-11-10 08:12:50'),
(131, 'radio-sation', '3', 'local', '2021-11-10 09:12:58', 2, NULL, '2021-11-10 08:12:58', '2021-11-10 08:12:58'),
(132, 'song', '1687420', 'local', '2021-11-10 08:16:23', 2, 4800, '2021-11-10 08:13:19', '2021-11-10 08:13:19'),
(133, 'radio-sation', '3', '', '2021-11-12 02:01:52', NULL, NULL, '2021-11-12 09:01:52', '2021-11-12 09:01:52'),
(134, 'song', '1687420', '', '2021-11-12 02:02:42', NULL, NULL, '2021-11-12 09:02:42', '2021-11-12 09:02:42'),
(135, 'song', '1687417', '', '2021-11-12 02:57:06', NULL, NULL, '2021-11-12 09:57:06', '2021-11-12 09:57:06'),
(136, 'song', '1687420', '', '2021-11-15 01:17:03', NULL, NULL, '2021-11-15 08:17:03', '2021-11-15 08:17:03'),
(137, 'song', '1687420', '', '2021-11-23 09:25:41', NULL, NULL, '2021-11-23 16:25:41', '2021-11-23 16:25:41'),
(138, 'song', '1687420', 'local', '2021-11-24 02:30:53', 1, 4800, '2021-11-24 02:27:49', '2021-11-24 02:27:49'),
(139, 'song', '1687420', 'local', '2021-11-24 02:31:30', 1, 4800, '2021-11-24 02:28:26', '2021-11-24 02:28:26'),
(140, 'radio-sation', '3', 'local', '2021-11-24 03:28:43', 1, NULL, '2021-11-24 02:28:43', '2021-11-24 02:28:43'),
(141, 'song', '1687420', '', '2021-11-24 00:49:30', NULL, NULL, '2021-11-24 07:49:30', '2021-11-24 07:49:30'),
(142, 'song', '1687420', '', '2021-11-26 18:36:42', NULL, NULL, '2021-11-27 01:36:42', '2021-11-27 01:36:42');

-- --------------------------------------------------------

--
-- Table structure for table `podcasts`
--

CREATE TABLE `podcasts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genre_id` int(10) UNSIGNED DEFAULT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `spotify_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soundcloud_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itunes_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezer_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `podcast_genres`
--

CREATE TABLE `podcast_genres` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `listen_notes_genre_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `podcast_genres`
--

INSERT INTO `podcast_genres` (`id`, `name`, `listen_notes_genre_id`, `cover`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'News', '99', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-news.png\",\"disk\":\"public\",\"url\":null}', 'news', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Arts', '100', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-art.png\",\"disk\":\"public\",\"url\":null}', 'arts', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Gaming', NULL, '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-gaming.png\",\"disk\":\"public\",\"url\":null}', 'gaming', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Education', '111', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-education.png\",\"disk\":\"public\",\"url\":null}', 'education', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Comedy', '133', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-comedy.png\",\"disk\":\"public\",\"url\":null}', 'comedy', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Health', '88', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-health.png\",\"disk\":\"public\",\"url\":null}', 'health', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(7, 'Fiction', '168', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-fiction.png\",\"disk\":\"public\",\"url\":null}', 'fiction', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(8, 'Sports', '77', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-sports.png\",\"disk\":\"public\",\"url\":null}', 'sports', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(9, 'Technology', '127', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-technology.png\",\"disk\":\"public\",\"url\":null}', 'technology', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(10, 'Science', '93', '{\"path\":\"\\/storage\\/defaults\\/images\\/podcast_genres\\/podcast-science.png\",\"disk\":\"public\",\"url\":null}', 'science', '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_symbol` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `name`, `amount`, `currency`, `currency_symbol`, `description`) VALUES
(1, 'Test ', 9999, 'USD', '$', 'Test'),
(2, 'Album Purchase License (For Fans)', 999, 'USD', '$', 'Album Purchase License (For Fans)'),
(3, 'sfsdf', 87879, 'USD', '$', 'testest');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productable_id` int(11) NOT NULL,
  `productable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productable_id`, `productable_type`) VALUES
(1, 68789, 'App\\Album'),
(2, 68790, 'App\\Album');

-- --------------------------------------------------------

--
-- Table structure for table `product_price`
--

CREATE TABLE `product_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `price_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_price`
--

INSERT INTO `product_price` (`id`, `product_id`, `price_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 2, NULL, NULL),
(3, 3, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `radio_stations`
--

CREATE TABLE `radio_stations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `streamEndpoint` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `highlight` tinyint(1) NOT NULL DEFAULT 0,
  `proxy` tinyint(1) NOT NULL DEFAULT 0,
  `serverType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `statsSource` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serverURL` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serverID` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serverMount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serverUsername` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serverPassword` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statsEndpoint` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interval` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `radio_stations`
--

INSERT INTO `radio_stations` (`id`, `name`, `cover`, `streamEndpoint`, `highlight`, `proxy`, `serverType`, `statsSource`, `serverURL`, `serverID`, `serverMount`, `serverUsername`, `serverPassword`, `statsEndpoint`, `interval`, `created_at`, `updated_at`) VALUES
(3, 'StaticXRadioReloaded', '{\"path\":\"\\/covers\\/radio-stations\\/1730302589staticxradio.jpg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/radio-stations\\/1730302589staticxradio.jpg\"}', 'http://strw1.openstream.co/1533', 0, 1, 'icecast', 'endpoint', NULL, NULL, NULL, NULL, NULL, NULL, 5000, '2021-11-08 21:27:06', '2021-11-09 01:15:55');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'artist', '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'user', '2021-10-14 21:19:43', '2021-10-14 21:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_permission`
--

INSERT INTO `role_permission` (`id`, `permission_id`, `role_id`) VALUES
(1, 11, 1),
(2, 12, 1),
(3, 13, 1),
(4, 14, 1),
(5, 15, 1),
(6, 16, 1),
(7, 17, 1),
(8, 18, 1),
(9, 19, 1),
(10, 20, 1),
(11, 21, 1),
(12, 22, 1),
(13, 23, 1),
(14, 24, 1),
(15, 25, 1),
(16, 26, 1),
(17, 27, 1),
(18, 28, 1),
(19, 29, 1),
(20, 30, 1),
(21, 31, 1),
(22, 32, 1),
(23, 33, 1),
(24, 34, 1),
(25, 35, 1),
(26, 36, 1),
(27, 37, 1),
(28, 38, 1),
(29, 39, 1),
(30, 40, 1),
(31, 8, 2),
(32, 9, 2),
(33, 10, 2),
(34, 1, 3),
(35, 2, 3),
(36, 3, 3),
(37, 4, 3),
(38, 5, 3),
(39, 6, 3),
(40, 7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 1, 3, NULL, NULL),
(2, 1, 1, NULL, NULL),
(3, 2, 3, NULL, NULL),
(4, 3, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `royalties`
--

CREATE TABLE `royalties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `royalties`
--

INSERT INTO `royalties` (`id`, `artist_id`, `price`) VALUES
(1, 4800, 90),
(2, 4800, 90),
(3, 4800, 90),
(4, 4800, 90),
(5, 4800, 90),
(6, 4800, 90),
(7, 4800, 90),
(8, 4800, 90),
(9, 4800, 90),
(10, 4800, 90),
(11, 4800, 90),
(12, 4800, 90),
(13, 4800, 90),
(14, 4800, 90);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `gateway` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sale_product`
--

CREATE TABLE `sale_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `artist_cut` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_id` bigint(20) NOT NULL,
  `endpoint` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '*',
  `layout` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'section',
  `rank` int(11) NOT NULL DEFAULT 0,
  `nb_labels` int(11) NOT NULL DEFAULT 10,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `title`, `page_id`, `endpoint`, `source`, `layout`, `rank`, `nb_labels`, `created_at`, `updated_at`) VALUES
(1, 'New releases', 1, 'new-releases', '*', 'section', 0, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(2, 'Most Played Songs', 1, 'popular-songs', '*', 'section', 1, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(3, 'Most Liked Songs', 1, 'most-liked-songs', '*', 'section', 2, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(4, 'Most Played Albums', 1, 'popular-albums', '*', 'section', 3, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(5, 'Most Played Podcasts', 1, 'popular-podcasts', '*', 'section', 4, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(6, 'Latest Podcasts', 1, 'latest-podcasts', '*', 'section', 5, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(7, 'New releases', 2, 'new-releases', '*', 'section', 0, 10, '2021-10-14 21:19:43', '2021-10-14 21:19:43'),
(9, 'Albums', 6, NULL, 'local', 'cards', 0, 6, '2021-10-20 05:12:29', '2021-10-20 05:13:45'),
(11, 'Radio Stations', 2, NULL, 'local', 'section', 1, 5, '2021-10-26 00:02:33', '2021-10-26 00:03:59');

-- --------------------------------------------------------

--
-- Table structure for table `section_item`
--

CREATE TABLE `section_item` (
  `item_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `section_item`
--

INSERT INTO `section_item` (`item_id`, `item_type`, `section_id`) VALUES
('68790', 'album', '8'),
('68790', 'album', '9'),
('68790', 'album', '10'),
('3', 'radio-station', '11');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(10) UNSIGNED NOT NULL,
  `user1_id` int(10) UNSIGNED NOT NULL,
  `user2_id` int(10) UNSIGNED NOT NULL,
  `block` tinyint(1) NOT NULL DEFAULT 0,
  `blocked_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `public` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `public`) VALUES
(1, 'software_version', '3.3', 1),
(2, 'appName', 'Indie Plug Media', 1),
(3, 'locale', 'en', 1),
(4, 'appUrl', 'https://ipmx.indieplugmedia.com/', 1),
(5, 'appLogo', 'https://ipmxcontent.s3.us-east-1.wasabisys.com/70331825401-72.png', 1),
(6, 'appFavicon', 'https://ipmxcontent.s3.us-east-1.wasabisys.com/15042761401-48.png', 1),
(7, 'allowThemeChange', '1', 1),
(8, 'enableUserUpload', '0', 1),
(9, 'enableLandingPage', '1', 1),
(10, 'enableBrowse', '1', 1),
(11, 'enableAds', '1', 1),
(12, 'allowArtistAccountRequests', '1', 1),
(13, 'requireAuth', '0', 1),
(14, 'crossfade', '0', 1),
(15, 'disableRegistration', '0', 1),
(16, 'allowVideos', '1', 1),
(17, 'hideRightSidebar', '0', 1),
(18, 'playerVolume', '100', 1),
(19, 'aboutUs', '', 1),
(20, 'requireEmailConfirmation', '0', 1),
(21, 'enableGoogleLogin', '0', 1),
(22, 'hideDownloadButton', '1', 1),
(23, 'google_oauth_client_id', '', 1),
(24, 'enableFacebookLogin', '0', 1),
(25, 'allowUserDownloads', '1', 1),
(26, 'account_agreement', '', 1),
(27, 'allowUserUploads', '1', 1),
(28, 'enableFriendshipSystem', '1', 1),
(29, 'enableRealtime', '0', 1),
(30, 'pusherAppId', '', 1),
(31, 'pusherKey', '', 1),
(32, 'pusherCluster', '', 1),
(33, 'pusherSecret', '', 1),
(34, 'enableChat', '0', 1),
(35, 'enableMail', '0', 1),
(36, 'mailEncryption', 'tls', 0),
(37, 'enableCharts', '1', 1),
(38, 'defaultTheme', 'Dark', 1),
(39, 'square_ad', '{\"code\":null,\"position\":\"trs\"}', 1),
(40, 'rect_ad', '{\"code\":null,\"position\":\"tcp\"}', 1),
(41, 'paypalSandboxMode', '1', 0),
(42, 'themes', '{\"primary\":\"#4245a8\",\"secondary\":\"#8C366C\",\"dark\":{\"background\":\"#0D0D0D\",\"text\":\"#ebebeb\",\"panel\":\"#210140\"},\"light\":{\"background\":\"#ffffff\",\"text\":\"#09021d\",\"panel\":\"#f7f7f7\"}}', 1),
(43, 'landingPage', '{\"callToAction\":\"Stream Now\",\"showContactUs\":\"1\",\"headerTitle\":\"Welcome to Indie Plug Media App\",\"headerDescription\":\"Listen to the best music anytime & anywhere\",\"headerBackgroundLayerColor\":\"#0000005E\",\"customLandingPageHeader\":\"1\",\"footerTitle\":\"Are you an Artist and you want to share your content ?\",\"footerDescription\":\"Sign up now and request an Artist account, get up to 500 MB of free space and more!\",\"footerBackground\":\"\\/images\\/landing-background.jpg\",\"sections\":\"[{\\\"title\\\":\\\"Explore & listen\\\",\\\"description\\\":\\\"You can discover a variety of music & podcast genres, the artists you like, the music you vibe with, and more.\\\",\\\"background\\\":\\\"\\/storage\\/defaults\\/images\\/landing\\/explore_and_listen.png\\\"},{\\\"title\\\":\\\"Listen with friends\\\",\\\"description\\\":\\\"You can invite your friends to chat with them and hear the same song at the same time. Cool isn\'t it?\\\",\\\"background\\\":\\\"\\/storage\\/defaults\\/images\\/landing\\/listen_with_friends.png\\\"},{\\\"title\\\":\\\"Create your library\\\",\\\"description\\\":\\\"You can upload your own beloved songs, create your best playlists, follow your favored artists, and more.\\\",\\\"background\\\":\\\"\\/storage\\/defaults\\/images\\/landing\\/create_your_library.png\\\"}]\",\"enableLandingPage\":\"1\",\"headerBackground\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/landing\\/793298684logo-name.jpg\"}', 1),
(44, 'subscriptionButtonColor', '#FF8F00', 1),
(45, 'subscriptionButtonText', 'upgrade', 1),
(46, 'subscriptionButtonOutlined', '1', 1),
(47, 'subscriptionButtonIcon', 'star', 1),
(48, 'enableBilling', '1', 1),
(49, 'stripeGateway', '1', 1),
(50, 'paypalGateway', '0', 1),
(51, 'storageDisk', '{\"disk\":\"s3\",\"name\":\"Wasabi S3\",\"endpoint\":\"s3.wasabisys.com\"}', 1),
(52, 'playerLanding', '/home', 1),
(53, 'availableUserDiskSpace', '10', 1),
(54, 'availableArtistDiskSpace', '500', 1),
(55, 'maxFileSize', '20', 1),
(56, 'maxImageSize', '2', 1),
(57, 'show_external_link_spotify', '1', 1),
(58, 'analytics_play_event', '1', 1),
(59, 'analytics_like_event', '1', 1),
(60, 'analytics_download_event', '1', 1),
(61, 'analytics_adClick_event', '1', 1),
(62, 'analytics_fileUpload_event', '1', 1),
(63, 'analytics_chat_event', '1', 1),
(64, 'analytics_login_event', '1', 1),
(65, 'analytics_purchase_event', '1', 1),
(66, 'analytics_logout_event', '1', 1),
(67, 'analytics_subscription_event', '1', 1),
(68, 'provider_spotify', '0', 1),
(69, 'spotify_search', '1', 1),
(70, 'provider_listenNotes', '0', 1),
(71, 'listenNotes_search', '1', 1),
(72, 'shuffleOrder', '[{\"id\":1,\"value\":\"album\",\"text\":\"Same Album\"},{\"id\":1,\"value\":\"artists\",\"text\":\"Same Artists\"},{\"id\":1,\"value\":\"genres\",\"text\":\"Same Genres\"}]', 1),
(73, 'enable_share_facebook', '0', 1),
(74, 'enable_share_twitter', '0', 1),
(75, 'enable_share_whatsapp', '0', 1),
(76, 'enable_share_telegram', '0', 1),
(77, 'enableLangSwitcher', '0', 1),
(78, 'enableThemeSwitcher', '1', 1),
(79, 'siteTitle', '%site_name — Play Music Anywhere & Anytime', 1),
(80, 'siteDescription', '%site_name — Play Music Anywhere & Anytime', 1),
(81, 'homePageTitle', 'Explore & listen | %site_name', 1),
(82, 'homePageDescription', 'Explore & start listening to pure music on %site_name', 1),
(83, 'browsePageTitle', 'Browse & discover music | %site_name', 1),
(84, 'browsePageDescription', 'Discover & enjoy listening to pure music on %site_name', 1),
(85, 'podcastsPageTitle', 'Podcasts | %site_name', 1),
(86, 'podcastsPageDescription', 'Discover & enjoy listening to podcasts on %site_name', 1),
(87, 'artistPageDescription', 'Enjoy hearing %artist_name on %site_name for free', 1),
(88, 'artistPageTitle', '%artist_name | Play on %site_name', 1),
(89, 'songPageTitle', '%song_title — %artist_name | Play On %site_name', 1),
(90, 'songPageDescription', 'Play & enjoy to %song_title — Song by %artist_name on %site_name', 1),
(91, 'albumPageTitle', '%artist_name — %album_title | Play on %site_name', 1),
(92, 'albumPageDescription', 'Play & enjoy to %album_title — Album by %artist_name on %site_name', 1),
(93, 'podcastPageTitle', '%artist_name — %podcast_title | Play on %site_name', 1),
(94, 'podcastPageDescription', 'Play %podcast_title podcast — Podcast by %artist_name on %site_name', 1),
(95, 'playlistPageTitle', '%playlist_title | Play on %site_name', 1),
(96, 'playlistPageDescription', 'Play & enjoy to %playlist_title — Playlist by %user_name on %site_name', 1),
(97, 'genrePageTitle', 'Top %genre_name music | Play on %site_name', 1),
(98, 'genrePageDescription', 'Play & enjoy to %genre_name music on %site_name', 1),
(99, 'podcastGenrePageTitle', 'Top %podcast-genre_name podcasts | Play on %site_name', 1),
(100, 'podcastGenrePageDescription', 'Play & enjoy to %podcast-genre_name podcasts on %site_name', 1),
(101, 'userProfilePageTitle', '%user_name\'s profile | %site_name', 1),
(102, 'userProfilePageDescription', 'Check %user_name profile on %site_name', 1),
(103, 'enablePodcasts', '1', 1),
(104, 'enable_artist_account', '1', 1),
(105, 'saas', '1', 1),
(106, 'default_currency', '{\"value\":\"USD\",\"text\":\"United States Dollar(USD)\",\"symbol\":\"$\"}', 1),
(107, 'enable_subscription', '1', 1),
(108, 'enable_selling', '1', 1),
(109, 'royalties', '1', 1),
(110, 'artist_royalty', '90', 1),
(111, 'artist_sale_cut', '85', 1),
(112, 'S3Key', 'TA91J7XAM1UUI9E5HXQ6', 0),
(113, 'S3Secret', 'ROK7gO0ePRpeom3aJ0tRU1vbDnv4c9oeqpZ4o9Lt', 0),
(114, 'S3Region', 'us-east-1', 0),
(115, 'S3Bucket', 'ipmxcontent', 0),
(116, 'S3Endpoint', 's3.wasabisys.com', 0),
(117, 'stripeClientID', 'pk_live_CpjbldWcX0UjeBEksTWmkJXM', 1),
(118, 'stripeSecret', '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', 0),
(119, 'disableVideo', '0', 1),
(120, 'autoPlay', '0', 1),
(121, 'youtubePlugin', '0', 1),
(122, 'allowGuestsToContact', '1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `download_count` bigint(20) NOT NULL DEFAULT 0,
  `source` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `source_format` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uploaded_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `isProduct` tinyint(1) NOT NULL DEFAULT 0,
  `isExclusive` tinyint(1) NOT NULL DEFAULT 0,
  `isExplicit` tinyint(1) NOT NULL DEFAULT 0,
  `rank_on_album` tinyint(1) DEFAULT NULL,
  `album_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `spotify_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soundcloud_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itunes_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezer_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `title`, `description`, `cover`, `download_count`, `source`, `source_format`, `duration`, `uploaded_by`, `user_id`, `artist_id`, `file_size`, `file_name`, `public`, `isProduct`, `isExclusive`, `isExplicit`, `rank_on_album`, `album_id`, `created_at`, `updated_at`, `spotify_link`, `soundcloud_link`, `youtube_link`, `itunes_link`, `deezer_link`) VALUES
(1687417, 'No Comments', NULL, '{\"path\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/albums\\/50512261300-cover.jpg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/albums\\/50512261300-cover.jpg\"}', 0, '{\"path\":\"\\/audios\\/songs\\/139586958402-princess-no-comment-feat-jirou-prod-by-lil-jay.mp3\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/audios\\/songs\\/139586958402-princess-no-comment-feat-jirou-prod-by-lil-jay.mp3\"}', 'file', '233', 'admin', 1, 0, 5708362, '02-Princess-No_Comment_Feat_Jirou_Prod_By_Lil_Jay.mp3', 1, 0, 0, 0, 0, 68790, '2021-10-18 06:41:51', '2021-10-18 06:43:51', NULL, NULL, NULL, NULL, NULL),
(1687418, 'Hard', NULL, '{\"path\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/albums\\/50512261300-cover.jpg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/albums\\/50512261300-cover.jpg\"}', 0, '{\"path\":\"\\/audios\\/songs\\/197633187003-princess-hard-prod-by-tdo.mp3\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/audios\\/songs\\/197633187003-princess-hard-prod-by-tdo.mp3\"}', 'file', '218', 'admin', 1, 0, 5364172, '03-Princess-Hard_Prod_By_Tdo.mp3', 1, 0, 0, 0, 1, 68790, '2021-10-18 06:42:27', '2021-10-18 06:43:51', NULL, NULL, NULL, NULL, NULL),
(1687420, 'Never Change Up', NULL, '{\"path\":\"\\/covers\\/songs\\/1242475977never-change-up-print.jpg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/songs\\/1242475977never-change-up-print.jpg\"}', 0, '{\"path\":\"\\/audios\\/songs\\/1073695461never-change-up.mp3\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/audios\\/songs\\/1073695461never-change-up.mp3\"}', 'file', '194', 'artist', 2, 4800, 7777160, 'Never Change Up.mp3', 1, 0, 0, 1, NULL, NULL, '2021-10-27 22:25:59', '2021-10-28 06:43:39', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `gateway_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gateway` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `renews_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `user_id`, `plan_id`, `name`, `gateway_id`, `gateway`, `status`, `renews_at`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'default', NULL, 'local', 'active', NULL, '2021-10-26 00:05:13', '2021-10-26 00:05:13'),
(2, 3, 1, 'default', NULL, 'local', 'active', NULL, '2021-11-25 02:23:35', '2021-11-25 02:23:35');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `payment_method` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_id` int(11) DEFAULT NULL,
  `available_disk_space` double(8,2) NOT NULL DEFAULT 0.00,
  `is_playing` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requested_artist_account` tinyint(1) NOT NULL DEFAULT 0,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `hide_activity` tinyint(1) NOT NULL DEFAULT 0,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `stripe_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_brand` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_last_four` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `avatar`, `email`, `password`, `lang`, `payment_method`, `facebook_id`, `available_disk_space`, `is_playing`, `requested_artist_account`, `is_admin`, `hide_activity`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `stripe_id`, `card_brand`, `card_last_four`, `trial_ends_at`) VALUES
(1, 'Admin', '{\"path\":\"\\/storage\\/defaults\\/images\\/user_avatar.png\",\"disk\":\"public\",\"url\":null}', 'admin@admin.com', '$2y$10$Ou4opxXRR3X/uUmq6hvnd.HcvQ1fhBEx4DBcybWm.cw6RA2HazBFS', 'en', NULL, NULL, 100.00, NULL, 0, 1, 0, NULL, NULL, '2021-10-14 21:19:43', '2021-10-14 21:19:43', NULL, NULL, NULL, NULL),
(2, 'Joseph Simmons', '{\"path\":\"\\/storage\\/defaults\\/images\\/user_avatar.png\",\"disk\":\"s3\",\"url\":null}', 'Gstatusincorporation@gmail.com', '$2y$10$2nHGPpgZ.CJ1/0qJMt0siuvF02ZnRBamYsVtjgCAafhLuUyGzx3ta', 'en', NULL, NULL, 10.00, NULL, 0, 0, 0, NULL, NULL, '2021-10-26 00:05:13', '2021-10-26 00:05:13', NULL, NULL, NULL, NULL),
(3, 'Test', '{\"path\":\"\\/storage\\/defaults\\/images\\/user_avatar.png\",\"disk\":\"s3\",\"url\":null}', 'Test@yopmail.com', '$2y$10$8Oe0LFdfwcDaeqwQ8hxXBuSFM1J8kkLZGycE1iIwRbUPAYxyDhoUm', 'en', NULL, NULL, 10.00, NULL, 0, 0, 0, NULL, NULL, '2021-11-25 02:23:35', '2021-11-25 02:23:35', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_permission`
--

CREATE TABLE `user_permission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_permission`
--

INSERT INTO `user_permission` (`id`, `permission_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 2, 1, NULL, NULL),
(3, 3, 1, NULL, NULL),
(4, 4, 1, NULL, NULL),
(5, 5, 1, NULL, NULL),
(6, 6, 1, NULL, NULL),
(7, 7, 1, NULL, NULL),
(8, 11, 1, NULL, NULL),
(9, 12, 1, NULL, NULL),
(10, 13, 1, NULL, NULL),
(11, 14, 1, NULL, NULL),
(12, 15, 1, NULL, NULL),
(13, 16, 1, NULL, NULL),
(14, 17, 1, NULL, NULL),
(15, 18, 1, NULL, NULL),
(16, 19, 1, NULL, NULL),
(17, 20, 1, NULL, NULL),
(18, 21, 1, NULL, NULL),
(19, 22, 1, NULL, NULL),
(20, 23, 1, NULL, NULL),
(21, 24, 1, NULL, NULL),
(22, 25, 1, NULL, NULL),
(23, 26, 1, NULL, NULL),
(24, 27, 1, NULL, NULL),
(25, 28, 1, NULL, NULL),
(26, 29, 1, NULL, NULL),
(27, 30, 1, NULL, NULL),
(28, 31, 1, NULL, NULL),
(29, 32, 1, NULL, NULL),
(30, 33, 1, NULL, NULL),
(31, 34, 1, NULL, NULL),
(32, 35, 1, NULL, NULL),
(33, 36, 1, NULL, NULL),
(34, 37, 1, NULL, NULL),
(35, 38, 1, NULL, NULL),
(36, 39, 1, NULL, NULL),
(37, 40, 1, NULL, NULL),
(38, 1, 2, NULL, NULL),
(39, 2, 2, NULL, NULL),
(40, 3, 2, NULL, NULL),
(41, 4, 2, NULL, NULL),
(42, 5, 2, NULL, NULL),
(43, 6, 2, NULL, NULL),
(44, 7, 2, NULL, NULL),
(45, 1, 3, NULL, NULL),
(46, 2, 3, NULL, NULL),
(47, 3, 3, NULL, NULL),
(48, 4, 3, NULL, NULL),
(49, 5, 3, NULL, NULL),
(50, 6, 3, NULL, NULL),
(51, 7, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `download_count` bigint(20) NOT NULL DEFAULT 0,
  `source` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `source_format` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uploaded_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `isProduct` tinyint(1) NOT NULL DEFAULT 0,
  `isExclusive` tinyint(1) NOT NULL DEFAULT 0,
  `isExplicit` tinyint(1) NOT NULL DEFAULT 0,
  `rank_on_album` tinyint(1) DEFAULT NULL,
  `album_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `spotify_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `soundcloud_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `itunes_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezer_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `title`, `description`, `cover`, `download_count`, `source`, `source_format`, `duration`, `uploaded_by`, `user_id`, `artist_id`, `file_size`, `file_name`, `public`, `isProduct`, `isExclusive`, `isExplicit`, `rank_on_album`, `album_id`, `created_at`, `updated_at`, `spotify_link`, `soundcloud_link`, `youtube_link`, `itunes_link`, `deezer_link`) VALUES
(1, 'Test Video', NULL, '{\"path\":\"\\/covers\\/videos\\/1598483277processed-c875cfaa-d9d4-457f-b8f5-9ca1a08e96ca-tjteaaan.jpeg\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/covers\\/videos\\/1598483277processed-c875cfaa-d9d4-457f-b8f5-9ca1a08e96ca-tjteaaan.jpeg\"}', 0, '{\"path\":\"\\/videos\\/videos\\/1461390952samplevideo-1280x720-2mb.mp4\",\"disk\":\"s3\",\"url\":\"https:\\/\\/ipmxcontent.s3.us-east-1.wasabisys.com\\/videos\\/videos\\/1461390952samplevideo-1280x720-2mb.mp4\"}', 'file', NULL, 'admin', 1, 0, 0, 'SampleVideo_1280x720_2mb.mp4', 1, 0, 0, 1, NULL, NULL, '2021-12-31 14:58:53', '2022-01-01 05:03:18', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `visiting_browsers`
--

CREATE TABLE `visiting_browsers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visitors` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visiting_countries`
--

CREATE TABLE `visiting_countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visitors` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `album_artist`
--
ALTER TABLE `album_artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artist_song`
--
ALTER TABLE `artist_song`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artist_video`
--
ALTER TABLE `artist_video`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friendships`
--
ALTER TABLE `friendships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friendships_friend_id_index` (`friend_id`),
  ADD KEY `friendships_user_id_index` (`user_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre_podcast`
--
ALTER TABLE `genre_podcast`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre_song`
--
ALTER TABLE `genre_song`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre_video`
--
ALTER TABLE `genre_video`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_locale_unique` (`locale`);

--
-- Indexes for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navigation_items`
--
ALTER TABLE `navigation_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payouts`
--
ALTER TABLE `payouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payout_methods`
--
ALTER TABLE `payout_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payout_method_artist`
--
ALTER TABLE `payout_method_artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plan_permission`
--
ALTER TABLE `plan_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plan_role`
--
ALTER TABLE `plan_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playlist_song`
--
ALTER TABLE `playlist_song`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plays`
--
ALTER TABLE `plays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `podcasts`
--
ALTER TABLE `podcasts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `podcast_genres`
--
ALTER TABLE `podcast_genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_price`
--
ALTER TABLE `product_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `radio_stations`
--
ALTER TABLE `radio_stations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `royalties`
--
ALTER TABLE `royalties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale_product`
--
ALTER TABLE `sale_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sessions_user1_id_user2_id_unique` (`user1_id`,`user2_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_plan_id_index` (`user_id`,`plan_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_stripe_id_index` (`stripe_id`);

--
-- Indexes for table `user_permission`
--
ALTER TABLE `user_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visiting_browsers`
--
ALTER TABLE `visiting_browsers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visiting_countries`
--
ALTER TABLE `visiting_countries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68791;

--
-- AUTO_INCREMENT for table `album_artist`
--
ALTER TABLE `album_artist`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4801;

--
-- AUTO_INCREMENT for table `artist_song`
--
ALTER TABLE `artist_song`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `artist_video`
--
ALTER TABLE `artist_video`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `friendships`
--
ALTER TABLE `friendships`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `genre_podcast`
--
ALTER TABLE `genre_podcast`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `genre_song`
--
ALTER TABLE `genre_song`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `genre_video`
--
ALTER TABLE `genre_video`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=798;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `navigation_items`
--
ALTER TABLE `navigation_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payouts`
--
ALTER TABLE `payouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payout_methods`
--
ALTER TABLE `payout_methods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payout_method_artist`
--
ALTER TABLE `payout_method_artist`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plan_permission`
--
ALTER TABLE `plan_permission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `plan_role`
--
ALTER TABLE `plan_role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17417;

--
-- AUTO_INCREMENT for table `playlist_song`
--
ALTER TABLE `playlist_song`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `plays`
--
ALTER TABLE `plays`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `podcasts`
--
ALTER TABLE `podcasts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54565;

--
-- AUTO_INCREMENT for table `podcast_genres`
--
ALTER TABLE `podcast_genres`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_price`
--
ALTER TABLE `product_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `radio_stations`
--
ALTER TABLE `radio_stations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `royalties`
--
ALTER TABLE `royalties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sale_product`
--
ALTER TABLE `sale_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1687426;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_permission`
--
ALTER TABLE `user_permission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `visiting_browsers`
--
ALTER TABLE `visiting_browsers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `visiting_countries`
--
ALTER TABLE `visiting_countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
