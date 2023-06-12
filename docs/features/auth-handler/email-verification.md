---
title: Email Verification
---

# Email Verification

Uses the [Laravel Email Verification](https://laravel.com/docs/10.x/verification) service.

## Setup

Email verification is disabled by default.
To enable email verification set `enable_email_verification => true`
in the ``filament-startify.php`` config.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Email Verification
|--------------------------------------------------------------------------
|
| This enables the feature, that every user need to have a  
| verified email in order to access the application. 
|
*/

'enable_email_verification' => true,

```

## Prepare Model

Implement `MustVerifyEmail` on your User model:

```php:no-line-numbers
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
```

## Customization

The ``verified`` middleware will automatically apply on all routs.
If you want to disable this feature and specify on which of your
routes this will apply, set `email_verification_all_routes => false`
in the ``filament-startify.php`` config

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Email Verification all routes
|--------------------------------------------------------------------------
|
| By the default email verification middleware will apply
| on all routes in this application. To configure your
| routes manually set this to false and take a look
| inside the documentation. 
|
*/

'email_verification_all_routes' => false,

```

Then you can add the `verified` middleware to any of your routes:

```php:no-line-numbers
Route::get("/profile", function () {
    // Only verified users may access this route...
})->middleware('verified');
```

Or, if you're using a custom route name prefix:

```php:no-line-numbers
Route::get("/profile", function () {
    // Only verified users may access this route...
})->middleware('verified:my-prefix.verification.notice');
```
