import{_ as a,o as n,c as e,e as s}from"./app-a94f4892.js";const t="/assets/two-factor-challenge-18179c47.png",o="/assets/two-factor-setup-a4d57327.png",c="/assets/two-factor-enabled-3a8ec7f3.png",p={},i=s('<h1 id="enable-2fa-two-factor-authentication" tabindex="-1"><a class="header-anchor" href="#enable-2fa-two-factor-authentication" aria-hidden="true">#</a> Enable 2FA (Two-Factor Authentication)</h1><p><img src="'+t+`" alt="two-factor-challenge.png"></p><blockquote><p><em><strong>HINT</strong>: If you have passkeys enabled in your application you&#39;re no longer able to use Two-Factor Auth.</em></p></blockquote><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations" aria-hidden="true">#</a> Migrations</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;startify-two-factor-migration&quot;</span>
php artisan migrate
</code></pre></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>2FA is disabled by default. You can enable it in the configuration file.</p><p>Set <code>enable_2fa =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Enable Two-Factor Authentication (2FA).
|--------------------------------------------------------------------------
|
| Subsequently, 2-factor authentication can be enabled for your
| platform. This is only available as long as you are not
| using Passkey (Passwordless) Authentication.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_2fa&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><blockquote><p><em>NOTE:</em> if you are using a model other than <code>User::class</code>, you can update the table name in the <code>filament-startify.php</code> config or modify the published migration.</p></blockquote><h2 id="add-to-user" tabindex="-1"><a class="header-anchor" href="#add-to-user" aria-hidden="true">#</a> Add to User</h2><p>Add <code>DevelogixPackages\\FilamentStartify\\Traits\\TwoFactor\\HasTwoFactor</code> to your Authenticatable model:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>TwoFactor<span class="token punctuation">\\</span>HasTwoFactor</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasApiTokens</span><span class="token punctuation">,</span> HasFactory<span class="token punctuation">,</span> Notifiable<span class="token punctuation">,</span> HasTwoFactor<span class="token punctuation">;</span>
    <span class="token operator">...</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><img src="`+o+'" alt="two-factor-setup.png"><img src="'+c+'" alt="two-factor-enabled.png"></p>',15),r=[i];function l(d,u){return n(),e("div",null,r)}const g=a(p,[["render",l],["__file","usage.html.vue"]]);export{g as default};
