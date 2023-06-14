---
title: Changelog
---

# Changelog

All notable changes to `filament-startify` will be documented in this file.

## 2.1.0 - 2023-06-14
### What's Changed
#### ⚡Features ⚡
+ Introducing ShortUrl the Startify Url Shortener
+ Introducing Users Administration 
+ Added new First Passkey Mailable
+ Added new Mailable`s for UserCreated event
+ Added new Screenshot to every possible doc file

#### 🪲 Bug fixes 🪲
+ Fixed bug which let everyone without a passkey login
+ Changed passkey_new_device_table -> added cascadeOnDelete() and right constrained
+ Changed passkey_table added right constrained
+ Fixed another login error which created an exception on login

#### 🖊️ Changes 🖊️
+ Changed default password rule to min:12
+ Removed README_old.md
+ Added new translation file mail.php
+ Edited default.php translation
+ Edited passkey.php translation
+ Changed new passkey mailable
+ Refactored StartifyServiceProvider


## 2.0.1 - 2023-06-13
### What's Changed
#### Bug fixes
 + Fixed bug which caused errors with migration publishing.
