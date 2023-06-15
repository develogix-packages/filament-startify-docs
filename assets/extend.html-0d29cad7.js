import{_ as s,o as n,c as a,e}from"./app-a94f4892.js";const t={},o=e(`<h1 id="extending-the-userresource" tabindex="-1"><a class="header-anchor" href="#extending-the-userresource" aria-hidden="true">#</a> Extending the UserResource</h1><p>In some cases you need to use your own UserResource. You can use the Startify UserResource and extend your own with it to profit from the available features.</p><h2 id="how-to" tabindex="-1"><a class="header-anchor" href="#how-to" aria-hidden="true">#</a> How to</h2><h3 id="disable-usage-of-the-default-resource" tabindex="-1"><a class="header-anchor" href="#disable-usage-of-the-default-resource" aria-hidden="true">#</a> Disable usage of the default resource</h3><p>To disable the default resource and prevent double listings go to the <code>filament-startify.php</code> and set <code>&#39;use_default_users_page&#39; =&gt; falae</code>.</p><h3 id="create-your-own-userresource" tabindex="-1"><a class="header-anchor" href="#create-your-own-userresource" aria-hidden="true">#</a> Create your own UserResource</h3><p>Create your own <code>UserResource</code> under <code>app/Filament/Resources</code> and extend it with the default <code>UserResource</code>.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>UserResource</span> <span class="token keyword">as</span> BaseResource<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserResource</span> <span class="token keyword">extends</span> <span class="token class-name">BaseResource</span>
<span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="make-use-of-the-predefined-sections" tabindex="-1"><a class="header-anchor" href="#make-use-of-the-predefined-sections" aria-hidden="true">#</a> Make use of the predefined Sections</h3><p>With the extended Resource you can use following values:</p><ul><li><p><code>public static ?bool $showIdColumn = true;</code></p><ul><li>Enables or disables the ID Column</li></ul></li><li><p><code>protected static ?bool $showTwoFactorColum = true;</code></p><ul><li>Enables or disables the Icon Column for TwoFactor</li></ul></li><li><p><code>protected static ?bool $showPasskeyColum = true;</code></p><ul><li>Enables or disables the Passkey Column</li></ul></li><li><p><code>protected static ?bool $showAvatarColum = true;</code></p><ul><li>Enables or disables the Avatar Column</li></ul></li><li><p><code> protected static ?string $defaultSortColum = &quot;id&quot;;</code></p><ul><li>Defines the default sort column</li></ul></li><li><p><code>protected static string $defaultSortDirection = &quot;desc&quot;;</code></p><ul><li>Defines the default sort direction</li></ul></li><li><p><code>protected static ?string $navigationGroup = &quot;admin&quot;;</code></p><ul><li>Defines the name of navigation Group</li></ul></li></ul><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>UserResource</span> <span class="token keyword">as</span> BaseResource<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserResource</span> <span class="token keyword">extends</span> <span class="token class-name">BaseResource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">bool</span> <span class="token variable">$showIdColumn</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">bool</span> <span class="token variable">$showTwoFactorColum</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">bool</span> <span class="token variable">$showPasskeyColum</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">bool</span> <span class="token variable">$showAvatarColum</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$defaultSortColum</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;id&quot;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$defaultSortDirection</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;desc&quot;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$navigationGroup</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;admin&quot;</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="custom-columns-actions-filters-etc" tabindex="-1"><a class="header-anchor" href="#custom-columns-actions-filters-etc" aria-hidden="true">#</a> Custom Columns, Actions, Filters, etc</h3><p>You can also extend the given <code>Columns</code>, <code>Actions</code>, <code>Bulkactions</code>, or <code>Filters</code>.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>UserResource</span> <span class="token keyword">as</span> BaseResource<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserResource</span> <span class="token keyword">extends</span> <span class="token class-name">BaseResource</span>
<span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">extendColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token punctuation">[</span>
           <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Tables<span class="token punctuation">\\</span>Columns<span class="token punctuation">\\</span>TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span>
               <span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Updated at&quot;</span><span class="token punctuation">)</span>
               <span class="token operator">-&gt;</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">extendActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">array</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">//Actions</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">extendBulkActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">array</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">//Bulk Actions</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">setFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">array</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">//Filters</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="last-step" tabindex="-1"><a class="header-anchor" href="#last-step" aria-hidden="true">#</a> Last Step</h3><p>Please change the default Resource under <code>componentes</code> in the config file:</p><div class="language-php" data-ext="php"><pre class="language-php"><code>    <span class="token string single-quoted-string">&#39;components&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">&#39;user_resource_path&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>UserResource</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><blockquote><p>If you forget this step there is a possible change that some features don&#39;t work like expected.</p></blockquote>`,19),p=[o];function c(l,u){return n(),a("div",null,p)}const i=s(t,[["render",c],["__file","extend.html.vue"]]);export{i as default};
