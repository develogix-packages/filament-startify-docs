import{_ as p,r as c,o as r,c as l,a as s,b as n,d as e,e as t}from"./app-a94f4892.js";const o="/assets/resource_lock-f5a616c8.png",i="/assets/resource_lock_2-dd485baf.png",u={},k=s("h1",{id:"resource-lock",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resource-lock","aria-hidden":"true"},"#"),n(" Resource Lock")],-1),d={href:"https://github.com/kenepa/resource-lock",target:"_blank",rel:"noopener noreferrer"},g=t('<p><img src="'+o+`" alt="resource_lock.png"></p><p>Startify Resource Lock is way to prevent two users from editing the same resource. If a user begins editing a resource, your app automatically locks the resource and shows other a notification.</p><h2 id="migrations" tabindex="-1"><a class="header-anchor" href="#migrations" aria-hidden="true">#</a> Migrations</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;startify-resource-lock-migration&quot;</span>
php artisan migrate
</code></pre></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2><p>Resource Lock is disabled by default. You can enable it in the configuration file.</p><p>Set <code>enable_resource_lock =&gt; true</code> in the <code>filament-startify.php</code> config:</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Startify Resource Lock
|--------------------------------------------------------------------------
|
| Startify Resource Lock is way to prevent two users from editing the
| same resource. If a user begins editing a resource, your app
| automatically locks the resource and shows other a
| notification.
|
*/</span>

<span class="token string single-quoted-string">&#39;enable_resource_lock&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="add-the-haslocks-trait-to-your-mode" tabindex="-1"><a class="header-anchor" href="#add-the-haslocks-trait-to-your-mode" aria-hidden="true">#</a> Add the <code>HasLocks</code> Trait to your mode.</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>ResourceLock<span class="token punctuation">\\</span>HasLocks</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasLocks</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
</code></pre></div><h3 id="add-the-resourcelock-trait-to-your-editrecord-page" tabindex="-1"><a class="header-anchor" href="#add-the-resourcelock-trait-to-your-editrecord-page" aria-hidden="true">#</a> Add the <code>ResourceLock</code> Trait to your <code>EditRecord</code> Page</h3><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>ResourceLock<span class="token punctuation">\\</span>ResourceLock</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EditUser</span> <span class="token keyword">extends</span> <span class="token class-name">EditRecord</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">ResourceLock</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$resource</span> <span class="token operator">=</span> <span class="token class-name static-context">UserResource</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
</code></pre></div><h3 id="simple-modal-resource" tabindex="-1"><a class="header-anchor" href="#simple-modal-resource" aria-hidden="true">#</a> Simple Modal Resource</h3><p>If your Resource is a <code>Simple Modal Resource</code>, you need to use <code>SimpleResourceLock </code> trait instead.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DevelogixPackages<span class="token punctuation">\\</span>FilamentStartify<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>ResourceLock<span class="token punctuation">\\</span>SimpleResourceLock</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EditUser</span> <span class="token keyword">extends</span> <span class="token class-name">EditRecord</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">SimpleResourceLock</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$resource</span> <span class="token operator">=</span> <span class="token class-name static-context">UserResource</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>`,17),h={href:"https://github.com/spatie/laravel-permission",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Resource Lock Configuration
|--------------------------------------------------------------------------
|
| Representation of the used data objects for resource locking.
| You can also specify your own.
|
*/</span>

<span class="token string single-quoted-string">&#39;resource_lock&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;unlocker&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;limited_access&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;gate&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;unlock-permisson&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>


<span class="token comment">/*
* Example definition
* NOT INSIDE CONFIG
*/</span>
<span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;unlock-permisson&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Post</span> <span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">email</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;test@test.com&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Example using spatie permission package</span>
<span class="token class-name static-context">Permission</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;unlock-permisson&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
</code></pre></div><h3 id="display-the-lock-owner" tabindex="-1"><a class="header-anchor" href="#display-the-lock-owner" aria-hidden="true">#</a> Display the Lock owner</h3><p>Set the <code>display_resource_lock_owner</code> inside the <code>filament-startify.php</code> config to <code>true</code> to display the lock owner inside the modal view.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/*
|--------------------------------------------------------------------------
| Resource Lock Configuration
|--------------------------------------------------------------------------
|
| Representation of the used data objects for resource locking.
| You can also specify your own.
|
*/</span>

<span class="token string single-quoted-string">&#39;resource_lock&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;lock_notice&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;display_resource_lock_owner&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  
</code></pre></div><h2 id="table-indicator" tabindex="-1"><a class="header-anchor" href="#table-indicator" aria-hidden="true">#</a> Table Indicator</h2><h3 id="use-an-indicator-icon-at-the-table-row" tabindex="-1"><a class="header-anchor" href="#use-an-indicator-icon-at-the-table-row" aria-hidden="true">#</a> Use an indicator icon at the table row</h3><p>At the moment I did not find another way to implement this rather than just using an <code>IconColum::class</code> like following.</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>

     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Table</span> <span class="token variable">$table</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Table</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$table</span>
            <span class="token operator">-&gt;</span><span class="token function">columns</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name static-context">IconColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;locked&quot;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Locked&quot;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">alignCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">getStateUsing</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$record</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">bool</span> <span class="token operator">=&gt;</span> <span class="token variable">$record</span><span class="token operator">-&gt;</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">trueIcon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;heroicon-o-lock-open&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">falseIcon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;heroicon-o-lock-closed&#39;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">disableClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;md&quot;</span><span class="token punctuation">)</span>
                    <span class="token operator">-&gt;</span><span class="token function">tooltip</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$record</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span> <span class="token operator">=&gt;</span> <span class="token variable">$record</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token operator">...</span>
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p><img src="`+o+'" alt="resource_lock.png"></p><h3 id="with-table-indicator" tabindex="-1"><a class="header-anchor" href="#with-table-indicator" aria-hidden="true">#</a> With table indicator</h3><p><img src="'+i+'" alt="resource_lock_2.png"></p>',12);function f(y,b){const a=c("ExternalLinkIcon");return r(),l("div",null,[k,s("blockquote",null,[s("p",null,[n("Based on "),s("a",d,[n("resource-lock by kenepa"),e(a)])])]),g,s("p",null,[n('You can restrict the access to the Unlock button or to the resource manager by adjusting the access variable. Enabling the "limited" key and setting it to true allows you to specify either a Laravel Gate class or a permission name from the '),s("a",h,[n("Spatie Permissions package"),e(a)]),n(".")]),m])}const _=p(u,[["render",f],["__file","usage.html.vue"]]);export{_ as default};
