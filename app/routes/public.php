<?php

/*************
 * ERROR 404 *
 *************/
$router->set404('App\View\Error404@show');

/*************
 * HOME PAGE *
 *************/
$router->get('/', 'App\View\LandPage@show');

/*********
 * TOKEN *
 *********/
$router->get('/session', function() {
    echo App\Model\Session::getToken()->getValue(); ///// esto es solo un prueba
});

/********
 * AJAX *
 ********/
require __DIR__ . "/ajax.php";
