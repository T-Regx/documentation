<?php
$subject = 'http://facebook.com and https://google.com';

// highlight-next-line
preg_match_all('#(https?)://(\w+.com)#', $subject, $match, PREG_PATTERN_ORDER);
