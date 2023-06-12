---
title: Configuration
---

# Auth Configuration

You may want to authenticate your users using a column other than `email` in
your Authenticatable model. After you have set-up your database, you can change the column in the config:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Authentication / User config
|--------------------------------------------------------------------------
|
| Authentication and User Configuration. For more details 
| please refer to the docs.
|
*/

'auth_config' => [
    /* The default user model */
    'user_model' => config(
        'auth.providers.users.model',
        App\Models\User::class
    ),
    
    /* The default user database table */
    'users_table' => 'users',
    
    /* The default login field which is used besides password */
    'fallback_login_field' => 'email',
    
    /* The default user password reset broker */
    'reset_broker' => config('auth.defaults.passwords'),
],

```

Optionally, update the field label in your language file:

```php:no-line-numbers
"fields" => [
   //
   "login" => "Username",
   //
```
