import{_ as n,o as s,c as a,e as t}from"./app-a94f4892.js";const e={},o=t(`<h1 id="auth-configuration" tabindex="-1"><a class="header-anchor" href="#auth-configuration" aria-hidden="true">#</a> Auth Configuration</h1><p>You may want to authenticate your users using a column other than <code>email</code> in your Authenticatable model. After you have set-up your database, you can change the column in the config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Authentication / User config
|--------------------------------------------------------------------------
|
| Authentication and User Configuration. For more details 
| please refer to the docs.
|
*/</span>

<span class="token string single-quoted-string">&#39;auth_config&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">/* The default user model */</span>
    <span class="token string single-quoted-string">&#39;user_model&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span>
        <span class="token string single-quoted-string">&#39;auth.providers.users.model&#39;</span><span class="token punctuation">,</span>
        <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token keyword">class</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* The default user database table */</span>
    <span class="token string single-quoted-string">&#39;users_table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* The default login field which is used besides password */</span>
    <span class="token string single-quoted-string">&#39;fallback_login_field&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment">/* The default user password reset broker */</span>
    <span class="token string single-quoted-string">&#39;reset_broker&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth.defaults.passwords&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><p>Optionally, update the field label in your language file:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token string double-quoted-string">&quot;fields&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
   <span class="token comment">//</span>
   <span class="token string double-quoted-string">&quot;login&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Username&quot;</span><span class="token punctuation">,</span>
   <span class="token comment">//</span>
</code></pre></div>`,5),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","configuration.html.vue"]]);export{r as default};
