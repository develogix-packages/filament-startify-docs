import{_ as n,o as a,c as e,e as s}from"./app-a94f4892.js";const o={},t=s(`<h1 id="installation-via-composer" tabindex="-1"><a class="header-anchor" href="#installation-via-composer" aria-hidden="true">#</a> Installation via Composer</h1><p>To install Filament Startify you&#39;ll need to add the package to your <code>composer.json</code> file:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
   <span class="token string">&quot;repositories&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
       <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;composer&quot;</span>,
       <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://filament-startify.composer.sh&quot;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>,
<span class="token punctuation">}</span>
</code></pre></div><p>Once the repository has been added to your <code>composer.json</code> file, you can install Filament Startify like any other composer package using the composer require command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require develogix-packages/filament-startify

Loading <span class="token function">composer</span> repositories with package information
Authentication required <span class="token punctuation">(</span>filament-startify.composer.sh<span class="token punctuation">)</span>:
Username: <span class="token punctuation">[</span>licensee-email<span class="token punctuation">]</span>
Password: <span class="token punctuation">[</span>license-key<span class="token punctuation">]</span>
</code></pre></div><p>You will be prompted to provide your username and password. Your username will be your email address and the password will is your license key. You will also need to append your fingerprint to your license key.</p><blockquote><p>You can set the fingerprint after the checkout.</p></blockquote><p>For example, let&#39;s say we have the following licensee and license activation:</p><ul><li>Contact email: <strong>office@develogix.at</strong></li><li>License key: <strong>8a23df8f-6233-4932-b6bc-8bcc353ef600</strong></li><li>Activation fingerprint: <strong>example.com</strong></li></ul><p>You will need to enter the above information as follows when prompted for your credentials:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Loading <span class="token function">composer</span> repositories with package information
Authentication required <span class="token punctuation">(</span>filament-startify.composer.sh<span class="token punctuation">)</span>:
Username: office@develogix.at
Password: 8a23df8f-6233-4932-b6bc-8bcc353ef600:example.com
</code></pre></div><blockquote><p>To clarify, the license key and fingerprint should be separated by a colon &quot;:&quot;.</p></blockquote>`,12),i=[t];function c(p,l){return a(),e("div",null,i)}const u=n(o,[["render",c],["__file","index.html.vue"]]);export{u as default};
