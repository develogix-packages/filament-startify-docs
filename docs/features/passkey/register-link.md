---
title: Register Link
---

# Register Link

In some cases you don't let users register by them self.
For example a business backend app. 

For some case like that you'll need to send the newly created User
a link where the User can setup his Passkey Device on his own.

You can use the ``FilamentStartify::getPasskeyUrl(Model $user, $expires = 10);`` 
function to generate an url you can send via a Mailable.

```php:no-line-numbers

/* $expires is set in minutes; It's recommended to set this value higher than one hour. */
FilamentStartify::getPasskeyUrl(Model $user, $expires = 120);

```
