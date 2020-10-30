<?php

/**
 * @author Tibelian
 * @see www.tibelian.com
 */

namespace App\View;

use App\Model\WebSite;
use App\Model\Session;

class LandPage {
    
    public function show(): void {

        // render the template and show the result
        echo WebSite::getTemplate()->render(
                'landpage.twig', 
                [
                    'website' => new WebSite(), 
                    'session' => new Session()
                ]
        );
        
    }
    
}
