---
title: Profile Picture
---

# Profile Picture

![profile_picture_ui_avatar.png](..%2F..%2Fart%2Fscreens%2Fprofile_picture_ui_avatar.png)

Filament Startify overrides the default profile picture provider,
instead it uses its own ``UserAvatarProvider::class``.

## Setup

You can choose between 'ui-avatar' or 'gravatar' as main profile picture provider 
in the ``filament-startify.php`` config file.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Default Avatar Provider (overrides filament)
|--------------------------------------------------------------------------
|
| Please define your avatar provider. Default is 'ui-avatar'.
| Options: 'ui-avatar' or 'gravatar'
|
*/

'startify_avatar_provider' => 'ui-avatar',

```

## Configuration

You have also a bunch of settings you can play with, following described:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Default Avatar Provider Settings
|--------------------------------------------------------------------------
|
| Please look inside our documentation for more information.
| Documentation:
|
*/

'startify_avatar' => [
    /* If 'true' then Startify will override Filaments default UiAvatarsProvider::class  */
    'use_as_default' => true,
    
    /* UI-Avatar Provider */
    'ui-avatar' => [
        /* User model field which is used for avatar generation */
        'name_field' => 'name',
        
        /* Color used as text color */
        'text_color' => 'FFFFFF',
        
        /* BG-Color if 'dynamic_bg_color' flag is set to false */
        'bg_color' => '111827',
        
        /* If set to 'true', provider will generate a dynamic color 
         based on the user name */
        'dynamic_bg_color' => true,
        
        /* Changing this colors will adapt the dynamic BG-Color */
        'hsl' => [
            'hRange' => [0, 360],
            'sRange' => [50, 75],
            'lRange' => [25, 60],
        ]
    ],
     /* Gravatar Provider */
    "gravatar" => [
        /* Default email is used to get the right Gravatar */
        'name_field' => 'email'
    ],
],
    
```

>*NOTE:* If you don't want to use Startify's default 
> avatar provider just set ```'use_as_default' => false``` in the
> ``filament-startify.php`` config file under `startify_avatar`.

## Example

### Ui-Avatar
![profile_picture_ui_avatar.png](..%2F..%2Fart%2Fscreens%2Fprofile_picture_ui_avatar.png)

### Gravatar
![profile_picture_gravatar.png](..%2F..%2Fart%2Fscreens%2Fprofile_picture_gravatar.png)