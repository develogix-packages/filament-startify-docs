import{_ as s,r as t,o,c,a as n,b as a,d as i,e as r}from"./app-a94f4892.js";const p="/assets/sanctum-4e2ec2ef.png",l={},u=n("h1",{id:"sanctum-api-tokens",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sanctum-api-tokens","aria-hidden":"true"},"#"),a(" Sanctum API Tokens")],-1),d=n("p",null,[n("img",{src:p,alt:"sanctum.png"})],-1),h={href:"https://laravel.com/docs/10.x/sanctum#installation",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>As soon as Sanctum is installed, you are ready to allow users to create new API tokens f rom the Profile page.</p><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Set <code>enable_sanctum =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Laravel Sanctum API Token
|--------------------------------------------------------------------------
|
| Afterwords you can enable or disable API Token management for
| your application powered by Laravel Sanctum.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_sanctum&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You can then control the available permissions abilities from the config, which will add each ability as a checkbox:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Laravel Sanctum Token Permissions
|--------------------------------------------------------------------------
|
| Option to define your custom token permission scopes.
|
*/</span>

<span class="token string single-quoted-string">&#39;sanctum_permissions&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;read&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;delete&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><p>Follow the Sanctum instructions for authenticating requests as usual.</p>`,8);function m(k,f){const e=t("ExternalLinkIcon");return o(),c("div",null,[u,d,n("p",null,[a("The most recent version of Laravel include Sanctum, but if you don't already have the package follow the "),n("a",h,[a("installation instructions here"),i(e)]),a(".")]),g])}const b=s(l,[["render",m],["__file","usage.html.vue"]]);export{b as default};
