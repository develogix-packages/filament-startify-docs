---
title: Extras
---

# Password Confirmation Button Action

Startify has a `PasswordButtonAction` shortcut which extends the default ``Filament\Pages\Actions\Action``
class. 

This button action will prompt the user to enter their password
for sensitive actions (eg. delete), then will not ask for password
again for the # of seconds defined in the filament-startify config (default 300s).

```php:no-line-numbers
use DevelogixPackages\FilamentStartify\Actions\PasswordButtonAction;

PasswordButtonAction::make('secure_action')->action('doSecureAction')

// Customize the icon, action, modalHeading and anything else.
PasswordButtonAction::make('secure_action')->label('Delete')->icon('heroicon-s-shield-check')->modalHeading('Confirmation')->action(fn()=>$this->doAction())
```

Alternatively if you need the users password for following actions you can use the 
``ForcePasswordButtonAction`` class.

```php:no-line-numbers
use DevelogixPackages\FilamentStartify\Actions\ForcePasswordButtonAction;

ForcePasswordButtonAction::make('secure_action')->action('doSecureAction')

public function doSecureAction(array $data): void
    {
        $currentPassword = $data["current_password"];
        ...
```
