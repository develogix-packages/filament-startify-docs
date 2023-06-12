---
title: Base Setup
---

# Base Setup
To use Startify as default Login Handler set `startify_as_default => true`
in the `config/filament-startify.php` config file.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify as default Login Handler
|--------------------------------------------------------------------------
|
| To use Startify as default Login Handler wich is automatically
| capable of using registration, two-factor auth, pass-key
| registration and login, just set 'startify_as_default'
| to true.
|
*/

'startify_as_default' => true,

```
