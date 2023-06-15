import{_ as e,o as a,c as s,e as t}from"./app-a94f4892.js";const n="/assets/user_admin_mail_password-0575af24.png",i="/assets/user_admin_mail_passkey-ce659846.png",o={},r=t('<h1 id="welcome-mail" tabindex="-1"><a class="header-anchor" href="#welcome-mail" aria-hidden="true">#</a> Welcome Mail</h1><p><img src="'+n+`" alt="user_admin_mail_password.png"></p><p>By default, Startify sends a custom welcome message including the password to the user bases on the set auth method. If passkeys are enabled the user receives a different mail without a password.</p><h3 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> Disable</h3><p>You can disable this feature <code>&#39;send_welcome_notification&#39; =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify User Administration (Welcome Mail)
|--------------------------------------------------------------------------
|
| By default Startify sends a custom welcome message including
| the password to the user bases on the set auth method. If
| passkeys are enabled the user receives a different mail
| without a password.
|
| Documentation:
| https://startify-docs.develogix.at/features/users-admin/mail.html
|
*/</span>

<span class="token string single-quoted-string">&#39;send_welcome_notification&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

</code></pre></div><h3 id="with-passkey" tabindex="-1"><a class="header-anchor" href="#with-passkey" aria-hidden="true">#</a> With passkey</h3><p><img src="`+i+'" alt="user_admin_mail_passkey.png"></p>',8),c=[r];function d(l,p){return a(),s("div",null,c)}const m=e(o,[["render",d],["__file","mail.html.vue"]]);export{m as default};
