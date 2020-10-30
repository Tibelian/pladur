<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\Model;

use DateTime;

class User {

    private string $id;
    private string $name;
    private string $password;
    private string $email;
    private string $ip;
    private DateTime $lastLogin;
    private bool $admin;
    
    public function getId(): string {
        return $this->id;
    }
    
    public function getName(): string {
        return $this->name;
    }

    public function getPassword(): string {
        return $this->password;
    }

    public function getEmail(): string {
        return $this->email;
    }

    public function getIp(): string {
        return $this->ip;
    }

    public function getLastLogin(): DateTime {
        return $this->lastLogin;
    }

    public function isAdmin(): bool {
        return $this->admin;
    }

    public function setId(string $id): void {
        $this->id = $id;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function setPassword(string $password): void {
        $this->password = $password;
    }

    public function setEmail(string $email): void {
        $this->email = $email;
    }

    public function setIp(string $ip): void {
        $this->ip = $ip;
    }

    public function setLastLogin(DateTime $lastLogin): void {
        $this->lastLogin = $lastLogin;
    }

    public function setAdmin(bool $admin): void {
        $this->admin = $admin;
    }

}