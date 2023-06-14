---
title: Extend
---

# Extending the UserResource

In some cases you need to use your own UserResource.
You can use the Startify UserResource and extend your own
with it to profit from the available features.

## How to

### Disable usage of the default resource

To disable the default resource and prevent double listings go
to the ``filament-startify.php`` and set `'use_default_users_page' => falae`.

### Create your own UserResource 

Create your own ``UserResource`` under `app/Filament/Resources` and
extend it with the default ``UserResource``.

```php:no-line-numbers
namespace App\Filament\Resources;

use DevelogixPackages\FilamentStartify\Resources\UserResource as BaseResource;

class UserResource extends BaseResource
{
    ...
}
```

### Make use of the predefined Sections

With the extended Resource you can use following values:
+ ``public static ?bool $showIdColumn = true;``
  + Enables or disables the ID Column

+ ``protected static ?bool $showTwoFactorColum = true;``
  + Enables or disables the Icon Column for TwoFactor
+ ``protected static ?bool $showPasskeyColum = true;``
  + Enables or disables the Passkey Column
+ ``protected static ?bool $showAvatarColum = true;``
  + Enables or disables the Avatar Column
+ `` protected static ?string $defaultSortColum = "id";``
  + Defines the default sort column
+ ``protected static string $defaultSortDirection = "desc";``
  + Defines the default sort direction
+ ``protected static ?string $navigationGroup = "admin";``
  + Defines the name of navigation Group


```php:no-line-numbers
namespace App\Filament\Resources;

use DevelogixPackages\FilamentStartify\Resources\UserResource as BaseResource;

class UserResource extends BaseResource
{
    public static ?bool $showIdColumn = true;
    
    protected static ?bool $showTwoFactorColum = true;
    
    protected static ?bool $showPasskeyColum = true;
    
    protected static ?bool $showAvatarColum = true;
    
    protected static ?string $defaultSortColum = "id";
    
    protected static string $defaultSortDirection = "desc";
    
    protected static ?string $navigationGroup = "admin";

```

### Custom Columns, Actions, Filters, etc

You can also extend the given ``Columns``, `Actions`, `Bulkactions`,
or ``Filters``.

```php:no-line-numbers
namespace App\Filament\Resources;

use DevelogixPackages\FilamentStartify\Resources\UserResource as BaseResource;

class UserResource extends BaseResource
{

    protected static function extendColumns(): array
    {
       return [
           \Filament\Tables\Columns\TextColumn::make('updated_at')
               ->label("Updated at")
               ->date()
       ];
    }

    protected static function extendActions():array{
        return [
            //Actions
        ];
    }

    protected static function extendBulkActions():array{
        return [
            //Bulk Actions
        ];
    }

    protected static function setFilters():array{
        return [
            //Filters
        ];
    }
```

### Last Step

Please change the default Resource under ``componentes`` in the config file:

````php:no-line-numbers
    'components' => [
        ...
        'user_resource_path' => \App\Filament\Resources\UserResource::class,
    ],

````

> If you forget this step there is a possible change that some
> features don't work like expected.