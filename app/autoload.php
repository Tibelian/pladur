<?php

require __DIR__ . '/vendor/autoload.php';

require __DIR__ . '/model/WebSite.php';
require __DIR__ . '/model/WebSiteException.php';
require __DIR__ . '/model/Config.php';
require __DIR__ . '/model/Mailer.php';
require __DIR__ . '/model/Session.php';
require __DIR__ . '/model/Token.php';
require __DIR__ . '/model/User.php';

require __DIR__ . '/data_access_object/OperationJSON.php';

require __DIR__ . '/view/LandPage.php';
require __DIR__ . '/view/Error404.php';
require __DIR__ . '/view/user/Panel.php';
require __DIR__ . '/view/user/Register.php';
require __DIR__ . '/view/user/Login.php';
require __DIR__ . '/view/user/Lost.php';
require __DIR__ . '/view/user/Settings.php';