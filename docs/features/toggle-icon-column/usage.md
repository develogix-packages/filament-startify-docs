---
title: Toggle Icon Column
---

# Toggle Icon Column

The Toggle Icon Column gives the ability to toggle specific boolean 
values just with a click.

No configuration needed. Just use the column inside your resource table.


```php:no-line-numbers
use DevelogixPackages\FilamentStartify\Columns\ToggleIconColumn;

class PostResource extends Resource
{
  public static function table(Table $table): Table
    {
        return $table
            ->columns([
               ToggleIconColumn::make('is_locked')
                ->onIcon('heroicon-s-lock-open')
                ->offIcon('heroicon-o-lock-closed')
                ->size('xl') // xs, sm, md, lg or xl
                ->onColor('primary')
                ->offColor('secondary')
                ->hoverColor('success')
    ...
```
