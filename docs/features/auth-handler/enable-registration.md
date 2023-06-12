---
title: Enable Registration
---

# Enable Registration

## Setup

Registration is disabled by default for security reasons.
To enable self-registration set `enable_registration => true` 
in the ``filament-startify.php`` config.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Registration
|--------------------------------------------------------------------------
|
| Enable or disable the ability for registration. At default this
| feature is disabled for security reasons.
|
*/

'enable_registration' => false,

```

## Configuration

You can define a custom redirect url if you want that your users
are redirected to a custom page.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Registration Redirect Url
|--------------------------------------------------------------------------
|
| Afterwords defined is the url to redirect your users after
| successful registration.
|
*/

'registration_redirect_url' => config('filament.home_url', '/'),
    
```
