---
title: Migrations
---

# Migrations

Publish the migrations to use Passkeys. In order to work properly
the user table ``password`` field is getting set to `nullable`.
If this isn't the case the user can't register.

You just need to publish and migrate, everything else is done 
automatically.

```bash:no-line-numbers
php artisan vendor:publish --tag="startify-passkey-migration"
php artisan migrate
```
