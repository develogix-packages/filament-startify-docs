import{_ as e,r as t,o,c as p,a as n,b as a,d as i,e as c}from"./app-a94f4892.js";const l={},r=n("h1",{id:"email-verification",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#email-verification","aria-hidden":"true"},"#"),a(" Email Verification")],-1),u={href:"https://laravel.com/docs/10.x/verification",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Email verification is disabled by default. To enable email verification set <code>enable_email_verification =&gt; true</code> in the <code>filament-startify.php</code> config.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Email Verification
|--------------------------------------------------------------------------
|
| This enables the feature, that every user need to have a  
| verified email in order to access the application. 
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_email_verification&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="prepare-model" tabindex="-1"><a class="header-anchor" href="#prepare-model" aria-hidden="true">#</a> Prepare Model</h2><p>Implement <code>MustVerifyEmail</code> on your User model:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>MustVerifyEmail</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span> <span class="token keyword">implements</span> <span class="token class-name">MustVerifyEmail</span>
</code></pre></div><h2 id="customization" tabindex="-1"><a class="header-anchor" href="#customization" aria-hidden="true">#</a> Customization</h2><p>The <code>verified</code> middleware will automatically apply on all routs. If you want to disable this feature and specify on which of your routes this will apply, set <code>email_verification_all_routes =&gt; false</code> in the <code>filament-startify.php</code> config</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Email Verification all routes
|--------------------------------------------------------------------------
|
| By the default email verification middleware will apply
| on all routes in this application. To configure your
| routes manually set this to false and take a look
| inside the documentation. 
|
*/</span>

<span class="token string single-quoted-string">&#39;email_verification_all_routes&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>

</code></pre></div><p>Then you can add the <code>verified</code> middleware to any of your routes:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/profile&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Only verified users may access this route...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;verified&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Or, if you&#39;re using a custom route name prefix:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;/profile&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Only verified users may access this route...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;verified:my-prefix.verification.notice&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,13);function k(h,f){const s=t("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[a("Uses the "),n("a",u,[a("Laravel Email Verification"),i(s)]),a(" service.")]),d])}const g=e(l,[["render",k],["__file","email-verification.html.vue"]]);export{g as default};
