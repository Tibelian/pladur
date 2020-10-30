<?php

/************
 * REGISTER *
 ************/
$router->get('/register', function() {
    header('Location: ' . App\Model\WebSite::getConfig()->getUrl() . '/user/register');
});
$router->get('/user/register', '\App\View\User\Register@show');

/*********
 * LOGIN *
 *********/
$router->get('/login', function() {
    header('Location: ' . App\Model\WebSite::getConfig()->getUrl() . '/user/login');
});
$router->get('/user/login', '\App\View\User\Login@show');

/*****************
 * LOST PASSWORD *
 *****************/
$router->get('/lost', function() {
    header('Location: ' . App\Model\WebSite::getConfig()->getUrl() . '/user/lost');
});
$router->get('/user/lost', '\App\View\User\Lost@show');
