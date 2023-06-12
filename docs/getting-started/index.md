---
title: Installation via Composer
---
# Installation via Composer

To install Filament Startify you'll need to add the package to your ``composer.json`` file:

 ```bash:no-line-numbers
{
    "repositories": [
        {
        "type": "composer",
        "url": "https://filament-startify.composer.sh"
        }
    ],
}
```

Once the repository has been added to your ``composer.json`` file, 
you can install Filament Startify like any other composer package 
using the composer require command:

 ```bash:no-line-numbers
composer require develogix-packages/filament-startify
 
Loading composer repositories with package information
Authentication required (filament-startify.composer.sh):
Username: [licensee-email]
Password: [license-key]
```

You will be prompted to provide your username and password. 
Your username will be your email address and the password 
will is your license key. You will also need to append your
fingerprint to your license key. 
>You can set the fingerprint after the checkout.
> 
For example, let's say we 
have the following licensee and license activation:

- Contact email: **office@develogix.at**
- License key: **8a23df8f-6233-4932-b6bc-8bcc353ef600**
- Activation fingerprint: **example.com**

You will need to enter the above information as follows when prompted for 
your credentials:

 ```bash:no-line-numbers
Loading composer repositories with package information
Authentication required (filament-startify.composer.sh):
Username: office@develogix.at
Password: 8a23df8f-6233-4932-b6bc-8bcc353ef600:example.com
```
>To clarify, the license key and fingerprint should be separated by a colon ":".


