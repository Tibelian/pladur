<?php

/**
 * @author
 * @see www.tibelian.com
 */

namespace App\Model;

class WebSiteException extends \Exception {

    protected $code;
    protected $message;
    protected string $location;

    function __construct($code, $message, $location = null){
        parent::__construct($message, $code);
        $this->setLocation($location);
    }

    function getLocation(): string {
        return $this->location;
    }

    function setLocation(string $location): void {
        $this->location = $location;
    }



}