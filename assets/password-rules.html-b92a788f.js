import{_ as n,o as s,c as a,e as t}from"./app-a94f4892.js";const e={},o=t(`<h1 id="password-rules" tabindex="-1"><a class="header-anchor" href="#password-rules" aria-hidden="true">#</a> Password Rules</h1><p>The registration, profile and password reset forms use the same set of password validation rules. You can add new rules to the array from the <code>filament-startify.php</code> config file:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Custom Password Rules
|--------------------------------------------------------------------------
|
| Set an array that&#39;s compatible with the Filament Forms rules() method.
| Rules for required and confirmed are already set. These rules will
| apply to the My Profile, registration, and password reset forms.
| If \\Illuminate\\Validation\\Rules\\Password::class instance
| fits more your needs, look inside the documentation.
|
*/</span>

<span class="token string single-quoted-string">&#39;password_rules&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;min:8&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><p>Alternatively you use an instance of <code>Illuminate\\Validation\\Rules\\Password::class</code> for validation, you can register new rules from the <code>boot()</code> method of your AppServiceProvider:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Rules<span class="token punctuation">\\</span>Password</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>FilamentStartify</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">FilamentStartify</span><span class="token operator">::</span><span class="token function">setPasswordRules</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span>
            <span class="token class-name static-context">Password</span><span class="token operator">::</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">letters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">mixedCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">uncompromised</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","password-rules.html.vue"]]);export{r as default};
