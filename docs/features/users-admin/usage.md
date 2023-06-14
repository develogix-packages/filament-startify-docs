---
title: Usage
---

# User Administration

![user_admin_page_2fa.png](..%2F..%2Fart%2Fscreens%2Fuser_admin_page_2fa.png)

Startify has a builtin User Administration based on a ``UserResource``. 

## Setup

You can enable this feature by setting 
``'enable_users_page' => true`` in the ``filament-startify.php`` config: 

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify User Administration
|--------------------------------------------------------------------------
|
| If enabled, Startify automatically creates a User Administration
| page, where you can create new Users and see their details.
| For more information please visit the docs.
|
| Documentation:
| https://startify-docs.develogix.at/features/users-admin/usage.html
|
*/

'enable_users_page' => true,

```

