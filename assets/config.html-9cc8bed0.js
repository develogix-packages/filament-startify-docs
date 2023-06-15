import{_ as e,r as o,o as p,c,a,b as n,d as i,e as s}from"./app-a94f4892.js";const l={},r=s(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="relying-party-information" tabindex="-1"><a class="header-anchor" href="#relying-party-information" aria-hidden="true">#</a> Relying Party Information</h2><p>The <em>Relying Party</em> is a way to uniquely identify your application inside the Passkey Device.</p><ul><li><code>name</code>: Default is your application name</li><li><code>id</code>: Domain of your application. Default is null and will be set automatically.</li><li><code>icon</code>: Optional image data in base64 (128 bytes maximum) or an image url.</li></ul><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Passkey Configuration
|--------------------------------------------------------------------------
|
| The base configurations of Passkeys. Please refer to the
| docs for detailed description.
|
*/</span>

<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;relying_party&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;PASSKEY_TITLE&quot;</span><span class="token punctuation">,</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;app.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;icon&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;PASSKEY_ICON&#39;</span><span class="token punctuation">,</span><span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//image base64 encoded</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
    
</code></pre></div><h2 id="key-attachment" tabindex="-1"><a class="header-anchor" href="#key-attachment" aria-hidden="true">#</a> Key Attachment</h2><p>By default, user determines the type of key used during registration. Choose &quot;cross-platform&quot; for USB keys, CA Servers, or Certificates, or &quot;platform&quot; for internal authenticators like Touch ID or Windows Hello. The default value is null for both options.</p><div class="language-php" data-ext="php"><pre class="language-php"><code>
<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;attachment_mode&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;null&#39;</span><span class="token punctuation">,</span> <span class="token comment">//Supported: \`null\`, \`cross-platform\`, \`platform\`</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>  
    
</code></pre></div><h2 id="attestation-conveyance" tabindex="-1"><a class="header-anchor" href="#attestation-conveyance" aria-hidden="true">#</a> Attestation Conveyance</h2><p>Attestation conveyance determines device verification. By default, it is not required. You can change it to indirect (requires verification from a trusted source) or direct (device includes validation data).</p><div class="language-php" data-ext="php"><pre class="language-php"><code>
<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;attestation_conveyance&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Enums<span class="token punctuation">\\</span>AttestationConveyancePreference</span><span class="token operator">::</span><span class="token constant">NONE</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
    
</code></pre></div><h2 id="login-verification" tabindex="-1"><a class="header-anchor" href="#login-verification" aria-hidden="true">#</a> Login Verification</h2><p>The default behavior for most authenticators is to require user verification during login.</p><p>You can change it to &quot;required&quot; for consistent verification or &quot;discouraged&quot; for faster login but slightly lower security.</p><p>The default setting is &quot;preferred.&quot;</p><div class="language-php" data-ext="php"><pre class="language-php"><code>
<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;user_verification&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Enums<span class="token punctuation">\\</span>UserVerification</span><span class="token operator">::</span><span class="token constant">PREFERRED</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
    
</code></pre></div><h2 id="algorithms" tabindex="-1"><a class="header-anchor" href="#algorithms" aria-hidden="true">#</a> Algorithms</h2>`,17),u={href:"https://w3c.github.io/webauthn/#typedefdef-cosealgorithmidentifier",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>If set to <code>null</code> following algos will be used by default: <code>ES256</code>,<code>ES256K</code>,<code>ES512</code>,<code>RS384</code>,<code>RS512</code>,<code>PS256</code>,<code>PS384</code>, <code>PS512</code>,<code>ED256</code>,<code>ED512</code>,<code>RS256</code>,<code>EdDSA</code>,<code>ES384</code></p><div class="language-php" data-ext="php"><pre class="language-php"><code>
<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
     <span class="token string single-quoted-string">&#39;public_key_credential_parameters&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
  
</code></pre></div><blockquote><p><strong>Warning</strong>: Only modify if you know what you&#39;re doing.</p></blockquote><p>To override the used algos define like that:</p><div class="language-php" data-ext="php"><pre class="language-php"><code>
<span class="token string single-quoted-string">&#39;passkey&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
     <span class="token string single-quoted-string">&#39;public_key_credential_parameters&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
           <span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Cose<span class="token punctuation">\\</span>Algorithms</span><span class="token operator">::</span><span class="token constant">COSE_ALGORITHM_ES384</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div>`,5);function g(k,h){const t=o("ExternalLinkIcon");return p(),c("div",null,[r,a("p",null,[n("These "),a("a",u,[n("COSE Algorithms"),i(t)]),n(" are the most compatible ones for in-device and roaming keys, since some must be transmitted on low bandwidth protocols. You will need to publish the config to override this config value.")]),d])}const m=e(l,[["render",g],["__file","config.html.vue"]]);export{m as default};
