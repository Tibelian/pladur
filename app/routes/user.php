<?php

/****************
 * USER PROFILE *
 ****************/
$router->get('/user', '\App\View\User\Panel@show');

/*****************
 * USER SETTINGS *
 *****************/
$router->get('/user/settings', '\App\View\User\Settings@show');

