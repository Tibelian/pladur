<?php

$router->mount('/' . App\Model\Session::getToken()->getValue(), function() use($router){
    
    // logout
    $router->post('/user/logout', '\App\Controller\User\Logout@execute');
    
    // login
    $router->post('/user/login', '\App\Controller\User\Login@execute');

    // create new account
    $router->post('/user/register', '\App\Controller\User\Register@execute');

    // lost reset password
    $router->post('/user/lost/reset', '\App\Controller\User\Lost@resetPassword');
    
    // send an email to confirm
    $router->post('/user/lost', '\App\Controller\User\Lost@execute');
    
    // settings
    $router->post('/user/settings/([a-z0-9_-]+)', function($option) {
        $controller = new App\Controller\User\Settings();
        $controller->modify($option);
    });
    
    
});