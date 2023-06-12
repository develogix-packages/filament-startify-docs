---
title: Components
---

# Extending and Overriding Components

All pages within the auth flow are Livewire components made to work with Filament Forms.
So you can easily extend any component to add your own fields and actions.

You can instruct Startify to use any custom components by updating the paths in the ``filament-startify.php`` config file:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Path to registration Livewire component.
|--------------------------------------------------------------------------
|
| Here you can define custom components such as a new profile component.
|
*/

'components' => [
    'registration_path' => \DevelogixPackages\FilamentStartify\Http\Livewire\Auth\Register::class,
    'password_reset_path' => \DevelogixPackages\FilamentStartify\Http\Livewire\Auth\ResetPassword::class,
    'email_verification_path' => \DevelogixPackages\FilamentStartify\Http\Livewire\Auth\Verify::class,
    'email_verification_controller_path' => \DevelogixPackages\FilamentStartify\Http\Controllers\EmailVerificationController::class,
    'lockscreen_path' => \DevelogixPackages\FilamentStartify\Http\Livewire\Auth\LockScreen::class,
    'passkey_create_path' => \DevelogixPackages\FilamentStartify\Http\Livewire\Auth\PasskeyCreate::class,
    'profile_page_path' => \DevelogixPackages\FilamentStartify\Pages\MyProfile::class,
],
```

*NOTE:* Remember, the Login path is set in the Filament config, not in the ``filament-startify.php`` config.

Here is an example of extending the StartifyRegister class to add new fields to registration:

```php:no-line-numbers

use DevelogixPackages\FilamentStartify\Http\Livewire\Auth\Register as FilamentStartifyRegister;


class Register extends FilamentStartifyRegister
{
    // Define the new attributes
    public $team_name;
    
    // Override the getFormSchema method and merge the default fields then add your own.
    protected function getFormSchema(): array
    {
        return array_merge(parent::getFormSchema(),[
            Forms\Components\TextInput::make("team_name")->required()
        ]);
    }
    
    // Use this method to modify the preparedData before the register() method is called.
    protected function prepareModelData($data): array
    {
        $preparedData = parent::prepareModelData($data);
        $preparedData["team_name"] = $this->team_name;

        return $preparedData;
    }
    
    // Optionally, you can override the entire register() method to customize exactly what happens at registration
    public function register()
    {
        $preparedData = $this->prepareModelData($this->form->getState());
        $team = Team::create(["name" => $preparedData["team_name"]]);
        unset($preparedData["team_name"]);
        // ...
    }
...
```
