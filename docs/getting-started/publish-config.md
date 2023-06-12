---
title: Publishing the files
---
# Publishing the files

You can publish the Startify config file for further customizations for 
example Password rules, redirect after registration, and enable/disable the profile page.

```bash:no-line-numbers
php artisan vendor:publish --tag="filament-startify-config"
```

You can publish the views using:

```bash:no-line-numbers
php artisan vendor:publish --tag="filament-startify-views"
```

>**HINT:** For migrations the specific needed migration can be found inside the documentation.
