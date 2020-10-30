<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\DataAccessObject;

use App\Model\WebSiteException;
use App\Model\User;

class OperationJSON {
    
    /**
     * @param string $filename
     * @return array
     * @throws WebSiteException
     */
    public static function load(string $filename): array{
        $file = __DIR__ . '/../database/' . $filename . '.json';
        if(file_exists($file)){
            try{
                return json_decode(file_get_contents($file), true);
            }catch(\TypeError $e){
                throw new WebSiteException(500, "The JSON file '" . $filename . "' is corrupted. Probably because the file is empty or malformed", "OperationJSON@load");
            }
        }else{
            throw new WebSiteException(404, "The JSON file '" . $filename . "' does not exist on our database", "OperationJSON@load");
        }
    }
    
    /**
     * @param string $filename
     * @param array $data
     * @return void
     */
    public static function create(string $filename, array $data): void{
        $filePath = __DIR__ . '/../database/' . $filename . '.json';
        file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);
    }
    
    /**
     * @return array
     */
    public static function getDatabase(): array{
        return self::load('config/database');
    }
    
    /**
     * @return array
     */
    public static function getMailerServer(): array{
        return self::load('config/mail');
    }
    
    /**
     * @return array
     */
    public static function getUsers(): array{
        return self::load('user');
    }
    
    /**
     * @param string $id
     * @return User
     */
    public static function getUser(string $id): ?User{
        $users = self::getUsers();
        foreach ($users as $user) {
            if (strtolower($id) == strtolower($user["id"])) {
                $userObj = new User();
                $userObj->setId($user["id"]);
                $userObj->setName($user["name"]);
                $userObj->setPassword($user["password"]);
                $userObj->setEmail($user["email"]);
                $userObj->setIp($user["ip"]);
                $userObj->setLastLogin($user["last_login"]);
                return $userObj;
            }
        }
        return null;
    }
    
    
    /**
     * @param string $ip
     * @return array
     */
    public static function geoLocate(string $ip): array{
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://ip-api.com/json/$ip");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        return json_decode($response, true);
    }
    

}