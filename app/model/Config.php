<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\Model;

class Config {

    private string $title;
    private string $url;
    private string $theme;
    private int $mailer;
    
    public function __construct(){
        
        $file = "app/database/config/website.json";
        $config = json_decode(file_get_contents($file), true);
        
        $this->setTitle($config['title']);
        $this->setUrl($config['url']);
        $this->setTheme($config['theme']);
        $this->setMailer($config['mailer']);
        
        setcookie("url", $this->getUrl(), 0, "/");
        setcookie("theme_url", $this->getUrl() . "/theme/" . $this->getTheme(), 0, "/");
        
    }
    
    public function getTitle(): string {
        return $this->title;
    }

    public function getUrl(): string {
        return $this->url;
    }

    public function getTheme(): string {
        return $this->theme;
    }

    public function getCache(): int {
        return $this->cache;
    }

    public function getMailer(): int {
        return $this->mailer;
    }
    public function setTitle(string $title): void {
        $this->title = $title;
    }

    public function setUrl(string $url): void {
        $this->url = $url;
    }

    public function setTheme(string $theme): void {
        $this->theme = $theme;
    }

    public function setMailer(int $mailer): void {
        $this->mailer = $mailer;
    }
    
}