<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\Model;

use App\DataAccessObject\OperationJson;
use App\Model\User;

class Session {

    private static User $user;
    private static bool $loggedIn = false;
    private static Token $token;
    
    public static function init(): void {
        
        // init session
        session_start();
        
        // the already connected user
        if(isset($_SESSION['user'])){
            
            // update the users data
            $newUser = OperationJSON::getUser($_SESSION['user']->getId());
            self::setLoggedIn(true);
            self::setUser($newUser);
            
        }
        
        // this is used on the client side
        // to send petitions with ajax
        if(isset($_SESSION['token'])){
            self::setToken($_SESSION['token']);
        }else{
            self::setToken(new Token());
            $_SESSION['token'] = self::getToken();
        }
        
        setcookie("token", self::getToken()->getValue(), 0, "/");
        
    }
    
    public static function getUser(): User {
        return self::$user;
    }

    public static function isLoggedIn(): bool {
        return self::$loggedIn;
    }

    public static function getToken(): Token {
        return self::$token;
    }

    public static function setUser(User $user): void {
        self::$user = $user;
    }

    public static function setLoggedIn(bool $loggedIn): void {
        self::$loggedIn = $loggedIn;
    }

    public static function setToken(Token $token): void {
        self::$token = $token;
    }
    
}
    
    
    
    