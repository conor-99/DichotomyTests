<?php // Example constants file

// Environment
define('DEV', true);

// SQL Queries
define('SQL_INSERT_RESULT', 'insert into result (test_id, ip_address, answers, percentages, survey) values (?, ?, ?, ?, ?)');

// SQL Credentials (Live DB)
define('LIVE_DT_SQL_SERVER', '');
define('LIVE_DT_SQL_USER', '');
define('LIVE_DT_SQL_PASS', '');
define('LIVE_DT_SQL_DATABASE', '');

// SQL Credentials (Development DB)
define('DEV_DT_SQL_SERVER', '');
define('DEV_DT_SQL_USER', '');
define('DEV_DT_SQL_PASS', '');
define('DEV_DT_SQL_DATABASE', '');
