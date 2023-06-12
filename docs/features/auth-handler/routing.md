---
title: Route Group Prefix
---

# Route Group Prefix

You can use the `"route_group_prefix"=>'',` option in the ``filament-startify.php`` config
file to set a name prefix for all of Startify's routes. 
Ex. `"route_group_prefix"=>'startify.',`

However, since Startify uses Laravel Auth to generate password reset and email
verification emails you will need to customize these emails to use the
appropriate routes.

For example, a user resetting their password from Filament Startify
will receive an email directing them to the `password.reset` route because
Laravel Auth generates the URL in this email automatically.

Please see instructions for
[Password Reset Customization](https://laravel.com/docs/10.x/passwords#password-customization) and
[Email Verification Customization](https://laravel.com/docs/10.x/verification#customization) for instructions on how to customize these URLs to suit your needs.
