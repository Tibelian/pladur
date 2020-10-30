<?php

namespace App;

use App\Model\Session;
use App\Model\WebSite;

require 'app/autoload.php';

try {
    
    // init session and website
    Session::init();
    WebSite::init();

    // manage routes
    $router = new \Bramus\Router\Router();
    include 'app/routes/public.php';
    
    if(Session::isLoggedIn()){
        include 'app/routes/user.php';
        if(Session::getUser()->isAdmin()){
            include 'app/routes/admin.php';
        }
    }else{
        include 'app/routes/guest.php';
    }

    // execute the route
    $router->run();

} catch(Model\WebSiteException $we) {
    
    echo "CLASS: WebSiteException <br>";
    echo "ERROR: " . $we->getMessage() . "<br>";
    echo "LOCATION: " . $we->getLocation() . "<br>";

} catch(\Exception $e) {
    
    echo "CLASS: " . get_class($e) . "<br>";
    echo "ERROR: " . $e->getMessage() . "<br>";

}