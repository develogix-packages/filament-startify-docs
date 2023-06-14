---
title: Resource Lock
---

# Resource Lock
![resource_lock.png](..%2F..%2Fart%2Fscreens%2Fresource_lock.png)

Startify Resource Lock is way to prevent two users from editing the
same resource. If a user begins editing a resource, your app
automatically locks the resource and shows other a
notification.

## Migrations

```bash:no-line-numbers
php artisan vendor:publish --tag="startify-resource-lock-migration"
php artisan migrate
```

## Setup

Resource Lock is disabled by default. You can enable it in the configuration file.

Set `enable_resource_lock => true` in the ``filament-startify.php`` config:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify Resource Lock
|--------------------------------------------------------------------------
|
| Startify Resource Lock is way to prevent two users from editing the
| same resource. If a user begins editing a resource, your app
| automatically locks the resource and shows other a
| notification.
|
*/

'enable_resource_lock' => true,

```

## Usage 

### Add the ```HasLocks``` Trait to your mode.

```php:no-line-numbers
use DevelogixPackages\FilamentStartify\Traits\ResourceLock\HasLocks;

class User extends Authenticatable
{
    use HasLocks;
    ...
```

### Add the ``ResourceLock`` Trait to your ``EditRecord`` Page

````php:no-line-numbers
use DevelogixPackages\FilamentStartify\Traits\ResourceLock\ResourceLock;

class EditUser extends EditRecord
{
    use ResourceLock;

    protected static string $resource = UserResource::class;
    ...
````

### Simple Modal Resource
If your Resource is a ``Simple Modal Resource``, you need to use `SimpleResourceLock ` trait 
instead.

````php:no-line-numbers
use DevelogixPackages\FilamentStartify\Traits\ResourceLock\SimpleResourceLock;

class EditUser extends EditRecord
{
    use SimpleResourceLock;

    protected static string $resource = UserResource::class;
    ...
````

## Configuration
You can restrict the access to the Unlock button or to the resource manager by 
adjusting the access variable. Enabling the "limited" key and setting it 
to true allows you to specify either a Laravel Gate class or a permission 
name from the [Spatie Permissions package](https://github.com/spatie/laravel-permission).

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Resource Lock Configuration
|--------------------------------------------------------------------------
|
| Representation of the used data objects for resource locking.
| You can also specify your own.
|
*/

'resource_lock' => [
    ...
    'unlocker' => [
        'limited_access' => true,
        'gate' => 'unlock-permisson'
    ],
    ...


/*
* Example definition
* NOT INSIDE CONFIG
*/
Gate::define('unlock-permisson', function (User $user, Post $post) {
  return $user->email === 'test@test.com';
});

// Example using spatie permission package
Permission::create(['name' => 'unlock-permisson']);    
```

### Display the Lock owner

Set the ``display_resource_lock_owner`` inside the `filament-startify.php` config
to ``true`` to display the lock owner inside the modal view. 

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Resource Lock Configuration
|--------------------------------------------------------------------------
|
| Representation of the used data objects for resource locking.
| You can also specify your own.
|
*/

'resource_lock' => [
    ...
    'lock_notice' => [
        'display_resource_lock_owner' => true,
    ],
    ...
  
```

## Table Indicator
### Use an indicator icon at the table row

At the moment I did not find another way to implement this rather than
just using an ``IconColum::class`` like following.

```php:no-line-numbers
namespace App\Filament\Resources;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

     public static function table(Table $table): Table
    {
        return $table
            ->columns([
                IconColumn::make("locked")
                    ->label("Locked")
                    ->alignCenter()
                    ->getStateUsing(fn($record):bool => $record->check())
                    ->trueIcon('heroicon-o-lock-open')
                    ->falseIcon('heroicon-o-lock-closed')
                    ->disableClick()
                    ->size("md")
                    ->tooltip(fn ($record): string => $record->message())
            ]);  
        ...
```

## Examples

![resource_lock.png](..%2F..%2Fart%2Fscreens%2Fresource_lock.png)

### With table indicator

![resource_lock_2.png](..%2F..%2Fart%2Fscreens%2Fresource_lock_2.png)