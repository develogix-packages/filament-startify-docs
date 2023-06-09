---
title: Spotlight Search
---

# Spotlight Search
> Based on [spotlight by wire-elements](https://github.com/wire-elements/spotlight)

![spotlight.png](../../art/screens/spotlight.png)

Spotlight is an Apple like search based on Wire-Elements Spotlight. 
There is no configuration needed.
To open the Spotlight search bar use the following shortcuts:

>**MAC:**
> CMD + K or CMD + /
 
>**Windows:**
> CTRL + K or CTRL + /


# Setup

Set `enable_spotlight => true` in the ``filament-startify.php`` config:

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify Spotlight search
|--------------------------------------------------------------------------
|
| Spotlight is a search based on Wire-Elements Spotlight. It is like
| the Apple Spotlight search on Mac. It is autoconfigured and 
| you can use it with following shortcuts:
| Windows   =>     CTRL + K or CTRL + /
| MAC       =>     CMD + K  or CMD + /
|
*/

'enable_spotlight' => false,

```

## Examples
![spotlight_1.png](../../art/screens/spotlight_1.png)

![spotlight_2.png](../../art/screens/spotlight_2.png)