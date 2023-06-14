---
title: Configuration
---
# Configuration

## Relying Party Information

The *Relying Party* is a way to uniquely identify your application 
inside the Passkey Device.

+ ``name``: Default is your application name
+ ``id``: Domain of your application. Default is null and will be set automatically.
+ ``icon``: Optional image data in base64 (128 bytes maximum) or an image url.

```php:no-line-numbers
/*
|--------------------------------------------------------------------------
| Startify Passkey Configuration
|--------------------------------------------------------------------------
|
| The base configurations of Passkeys. Please refer to the
| docs for detailed description.
|
*/

'passkey' => [
    'relying_party' => [
        'name' => env("PASSKEY_TITLE",config("app.name")),
        'id' => null,
        'icon' => env('PASSKEY_ICON',null), //image base64 encoded
    ],
    ...
],
    
```

## Key Attachment

By default, user determines the type of key used during registration. 
Choose "cross-platform" for USB keys, CA Servers, or Certificates, 
or "platform" for internal authenticators like Touch ID or Windows Hello. 
The default value is null for both options.

```php:no-line-numbers

'passkey' => [
    ...
    'attachment_mode' => 'null', //Supported: `null`, `cross-platform`, `platform`
    ...
],  
    
```

## Attestation Conveyance

Attestation conveyance determines device verification. 
By default, it is not required. You can change it to 
indirect (requires verification from a trusted source) 
or direct (device includes validation data).

```php:no-line-numbers

'passkey' => [
    ...
    'attestation_conveyance' => \DevelogixPackages\FilamentStartify\Enums\AttestationConveyancePreference::NONE->value,
    ...
],
    
```

## Login Verification

The default behavior for most authenticators is to require 
user verification during login. 

You can change it to 
"required" for consistent verification or "discouraged" for faster 
login but slightly lower security. 

The default setting is "preferred."

```php:no-line-numbers

'passkey' => [
    ...
    'user_verification' => \DevelogixPackages\FilamentStartify\Enums\UserVerification::PREFERRED->value,
    ...
],
    
```

## Algorithms

These [COSE Algorithms](https://w3c.github.io/webauthn/#typedefdef-cosealgorithmidentifier) 
are the most compatible ones for in-device and 
roaming keys, since some must be transmitted on low bandwidth protocols. 
You will need to publish the config to override this config value.

If set to ``null`` following algos will be used by default:
`ES256`,`ES256K`,`ES512`,`RS384`,`RS512`,`PS256`,`PS384`,
`PS512`,`ED256`,`ED512`,`RS256`,`EdDSA`,`ES384`


```php:no-line-numbers

'passkey' => [
    ...
     'public_key_credential_parameters' => null,
    ...
],
  
```

>**Warning**: Only modify if you know what you're doing.

To override the used algos define like that:

```php:no-line-numbers

'passkey' => [
    ...
     'public_key_credential_parameters' => [
           (string) \Cose\Algorithms::COSE_ALGORITHM_ES384,
      ],
    ...
],
```
