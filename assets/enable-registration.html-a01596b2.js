import{_ as e,o as n,c as a,e as s}from"./app-a94f4892.js";const t="/assets/register-4ca05f41.png",r={},i=s('<h1 id="enable-registration" tabindex="-1"><a class="header-anchor" href="#enable-registration" aria-hidden="true">#</a> Enable Registration</h1><p><img src="'+t+`" alt="Filament Startify cover"></p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Registration is disabled by default for security reasons. To enable self-registration set <code>enable_registration =&gt; true</code> in the <code>filament-startify.php</code> config.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Registration
|--------------------------------------------------------------------------
|
| Enable or disable the ability for registration. At default this
| feature is disabled for security reasons.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_registration&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You can define a custom redirect url if you want that your users are redirected to a custom page.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Registration Redirect Url
|--------------------------------------------------------------------------
|
| Afterwords defined is the url to redirect your users after
| successful registration.
|
*/</span>

<span class="token string single-quoted-string">&#39;registration_redirect_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;filament.home_url&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
</code></pre></div>`,8),o=[i];function c(p,l){return n(),a("div",null,o)}const u=e(r,[["render",c],["__file","enable-registration.html.vue"]]);export{u as default};
