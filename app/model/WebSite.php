<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\Model;

use \Twig\Environment as Template;
use \Twig\Loader\FilesystemLoader as TemplateLoader;

class WebSite {

    private static Template $template;
    private static Config $config;
    
    private static string $themePath;
    private static string $themeUrl;
    private static string $userIp;

    public static function init(): void {

        // load config from json file
        self::setConfig(new Config());
        
        // user ip
        self::setUserIp(self::loadRealIp());

        // prepare twig
        self::changeTheme(self::getConfig()->getTheme());
        
    }
    
    public static function changeTheme(string $themeName, bool $configName = true): void {
        if($configName){
            self::getConfig()->setTheme($themeName);
        }
        $themeUrl = self::getConfig()->getUrl() . '/theme/' . $themeName;
        $themePath = __DIR__ . '/../../theme/' . $themeName . '/template';
        self::setThemeUrl($themeUrl);
        self::setThemePath($themePath);
        $loader = new TemplateLoader(self::getThemePath());
        self::setTemplate(new Template($loader));
        // $loader = new \Twig\Loader\FilesystemLoader(self::getThemePath(), ['cache' => '/path/to/compilation_cache']);
    }
    
    public static function loadRealIp(){
        if (isset($_SERVER["HTTP_CLIENT_IP"])){
            return $_SERVER["HTTP_CLIENT_IP"];
        }elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        }elseif (isset($_SERVER["HTTP_X_FORWARDED"])){
            return $_SERVER["HTTP_X_FORWARDED"];
        }elseif (isset($_SERVER["HTTP_FORWARDED_FOR"])){
            return $_SERVER["HTTP_FORWARDED_FOR"];
        }elseif (isset($_SERVER["HTTP_FORWARDED"])){
            return $_SERVER["HTTP_FORWARDED"];
        }else{
            return $_SERVER["REMOTE_ADDR"];
        }
    }
    
    public static function getTemplate(): Template {
        return self::$template;
    }

    public static function getConfig(): Config {
        return self::$config;
    }

    public static function getThemePath(): string {
        return self::$themePath;
    }

    public static function getThemeUrl(): string {
        return self::$themeUrl;
    }

    public static function getUserIp(): string {
        return self::$userIp;
    }

    public static function setTemplate(Template $template): void {
        self::$template = $template;
    }

    public static function setConfig(Config $config): void {
        self::$config = $config;
    }

    public static function setThemePath(string $themePath): void {
        self::$themePath = $themePath;
    }

    public static function setThemeUrl(string $themeUrl): void {
        self::$themeUrl = $themeUrl;
    }

    public static function setUserIp(string $userIp): void {
        self::$userIp = $userIp;
    }
    
}