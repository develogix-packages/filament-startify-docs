---
title: Browser Session Overview
---

# Browser Sessions Overview

Browser Session displays an overview over all logged in sessions from a user in the profile.
Browser Sessions are disabled by default. You can enable it in the configuration file.

## Setup 

Set `enable_browser_sessions => true` in the ``filament-startify.php`` config:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Enable Browser Session
|--------------------------------------------------------------------------
|
| Below you can activate the overview for your browser sessions. This
| is only possible if you use "database" as session driver.
|
*/

'enable_browser_sessions' => false,

```
 
## Configuration

>*NOTE:* You need to use ``database`` as ``SESSION_DRIVER`` to use the 
> browser sessions and logout feature.

Run Database migration:
```bash:no-line-numbers
php artisan session:table
php artisan migrate
```


>It is recommended to force the middleware on all, in the Admin Panel 
available routes.
> 
>**This is done by default by Startify!**

