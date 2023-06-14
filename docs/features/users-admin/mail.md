---
title: Welcome Mail
---

# Welcome Mail
![user_admin_mail_password.png](..%2F..%2Fart%2Fscreens%2Fuser_admin_mail_password.png)

By default, Startify sends a custom welcome message including
the password to the user bases on the set auth method. If
passkeys are enabled the user receives a different mail
without a password.

### Disable
You can disable this feature 
``'send_welcome_notification' => true`` in the ``filament-startify.php`` config: 

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify User Administration (Welcome Mail)
|--------------------------------------------------------------------------
|
| By default Startify sends a custom welcome message including
| the password to the user bases on the set auth method. If
| passkeys are enabled the user receives a different mail
| without a password.
|
| Documentation:
| https://startify-docs.develogix.at/features/users-admin/mail.html
|
*/

'send_welcome_notification' => true,

```

### With passkey
![user_admin_mail_passkey.png](..%2F..%2Fart%2Fscreens%2Fuser_admin_mail_passkey.png)