<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\View;

use App\Model\WebSite;
use App\Model\Session;

class Error404 {
    
    public function show(): void {
        
        header('HTTP/1.1 404 Not Found');
        echo WebSite::getTemplate()->render(
                '404.twig', 
                [
                    'website' => new WebSite(),
                    'session' => new Session()
                ]
        );

    }
    
}
