---
title: Password Rules
---

# Password Rules

The registration, profile and password reset forms use
the same set of password validation rules.
You can add new rules to the array from the ``filament-startify.php`` config file:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Custom Password Rules
|--------------------------------------------------------------------------
|
| Set an array that's compatible with the Filament Forms rules() method.
| Rules for required and confirmed are already set. These rules will
| apply to the My Profile, registration, and password reset forms.
| If \Illuminate\Validation\Rules\Password::class instance
| fits more your needs, look inside the documentation.
|
*/

'password_rules' => ['min:8'],

```

Alternatively you use an instance of 
`Illuminate\Validation\Rules\Password::class` for validation, you can
register new rules from the `boot()` method of your AppServiceProvider:

```php:no-line-numbers
use Illuminate\Validation\Rules\Password;
use DevelogixPackages\FilamentStartify\FilamentStartify;

public function boot()
{
    FilamentStartify::setPasswordRules(
        [
            Password::min(8)
                ->letters()
                ->numbers()
                ->mixedCase()
                ->uncompromised(3)
        ]
    );
}
```
